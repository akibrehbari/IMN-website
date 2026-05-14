import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { SHOW_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/shared/SanityImage";
import Button from "@/components/shared/Button";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const show = await client.fetch(SHOW_QUERY, { slug });
    if (show) {
      return {
        title: show.seo?.metaTitle || `${show.title} | Shows`,
        description: show.seo?.metaDescription || show.description || "Watch this original series from Ibex Media Network.",
      };
    }
  } catch {
    // fall through
  }
  return { title: "Show | Shows", description: "Watch this original series from Ibex Media Network." };
}

async function getShow(slug: string) {
  try {
    return await client.fetch(SHOW_QUERY, { slug });
  } catch (error) {
    console.error("Error fetching show:", error);
    return null;
  }
}

export default async function ShowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = await getShow(slug);

  const showTitle = show?.title || slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
  const showDescription = show?.description || "This show page will display episodes from the series when connected to Sanity CMS.";
  const showType = show?.showType || "video";
  const episodes = show?.episodes || [];

  return (
    <div className="pt-24 pb-16">
      <div className="container-wide">
        {/* Show Header */}
        <div className="mb-12">
          <span className="text-imn-red text-sm font-semibold uppercase tracking-wider">
            {showType === "podcast" ? "Podcast" : "Video Series"}
          </span>
          <h1 className="font-serif text-display-sm md:text-display text-imn-dark mt-2 mb-4">
            {showTitle}
          </h1>
          <p className="text-imn-gray-500 text-lg max-w-2xl">{showDescription}</p>
        </div>

        {/* Show Thumbnail */}
        {show?.thumbnail?.asset && (
          <div className="relative aspect-video max-w-3xl rounded-xl overflow-hidden mb-12">
            <SanityImage image={show.thumbnail} alt={showTitle} fill className="object-cover" />
          </div>
        )}

        {/* Episodes Grid */}
        {episodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {episodes.map((ep: { _id: string; title: string; youtubeVideoId?: string; duration?: string; publishedAt?: string; thumbnail?: { asset?: { _ref: string } } }) => (
              <div key={ep._id} className="rounded-xl overflow-hidden border border-imn-gray-100">
                <div className="aspect-video bg-imn-gray-100 flex items-center justify-center relative">
                  {ep.youtubeVideoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${ep.youtubeVideoId}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={ep.title}
                    />
                  ) : ep.thumbnail?.asset ? (
                    <SanityImage image={ep.thumbnail} alt={ep.title} fill className="object-cover" />
                  ) : (
                    <svg className="w-12 h-12 text-imn-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                  {ep.duration && (
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 text-white text-xs rounded z-10">
                      {ep.duration}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-imn-dark text-sm">{ep.title}</h3>
                  {ep.publishedAt && (
                    <p className="text-imn-gray-400 text-xs mt-1">
                      {new Date(ep.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-imn-gray-100">
                <div className="aspect-video bg-imn-gray-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-imn-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-imn-dark text-sm">Episode {i}: Coming Soon</h3>
                  <p className="text-imn-gray-400 text-xs mt-1">Episodes will appear here once added in Sanity CMS</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button href="/shows" variant="secondary">
            Back to All Shows
          </Button>
        </div>
      </div>
    </div>
  );
}
