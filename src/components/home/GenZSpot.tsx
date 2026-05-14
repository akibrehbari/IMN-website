import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";
import AnimateIn from "@/components/shared/AnimateIn";
import { AnimateStagger, AnimateStaggerItem } from "@/components/shared/AnimateStagger";

// To add/change reels: update the url and provide a thumbnail screenshot.
// Drop thumbnail images into public/images/reels/ and reference them below.
// When INSTAGRAM_ACCESS_TOKEN is set, the latest 4 posts are fetched automatically.
const MANUAL_REELS: { url: string; thumbnail: string | null }[] = [
  {
    url: "https://www.instagram.com/ibexmedianetwork/reel/DWjgHU5EnB0/",
    thumbnail: "/images/reels/reel 1.png",
  },
  {
    url: "https://www.instagram.com/ibexmedianetwork/reel/DWgqYjeFcnC/",
    thumbnail: "/images/reels/reel 2.png",
  },
  {
    url: "https://www.instagram.com/ibexmedianetwork/reel/DWJuFjBDFsS/",
    thumbnail: "/images/reels/reel 3.png",
  },
  {
    url: "https://www.instagram.com/ibexmedianetwork/reel/DV-mQPIjWqW/",
    thumbnail: "/images/reels/reel 4.png",
  },
];

async function getLatestInstagramPosts(): Promise<
  { url: string; thumbnail: string | null }[]
> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,permalink&limit=12&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const items: { media_type: string; permalink: string }[] = data.data || [];

    const videos = items.filter((p) => p.media_type === "VIDEO");
    const selected = videos.length >= 4 ? videos : items;
    const topFour = selected.slice(0, 4);

    // Fetch thumbnail via oEmbed for each
    const withThumbnails = await Promise.all(
      topFour.map(async (p) => {
        try {
          const oEmbed = await fetch(
            `https://graph.facebook.com/v17.0/instagram_oembed?url=${encodeURIComponent(p.permalink)}&access_token=${token}&omitscript=true`,
            { next: { revalidate: 3600 } }
          );
          if (!oEmbed.ok) return { url: p.permalink, thumbnail: null };
          const d = await oEmbed.json();
          return {
            url: p.permalink,
            thumbnail: (d.thumbnail_url as string) || null,
          };
        } catch {
          return { url: p.permalink, thumbnail: null };
        }
      })
    );
    return withThumbnails;
  } catch {
    return [];
  }
}

export default async function GenZSpot() {
  const apiPosts = await getLatestInstagramPosts();
  const posts = apiPosts.length > 0 ? apiPosts : MANUAL_REELS;

  return (
    <section className="bg-imn-red py-20 md:py-32 overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <AnimateIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
              The Gen Z Spot
            </span>
            <h2 className="font-sans text-4xl md:text-display font-black uppercase tracking-tight text-white leading-[0.95]">
              Where the Next<br />Generation<br />Gets Its News
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-white/70 text-base max-w-xs md:text-right leading-relaxed">
              Follow us on Instagram for daily news updates, behind-the-scenes
              content, and stories that move.
            </p>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-imn-dark text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @ibexmedianetwork
            </a>
          </div>
        </AnimateIn>

        {/* Instagram Reels grid */}
        <AnimateStagger className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible">
          {posts.map((post, i) => (
            <AnimateStaggerItem key={i} className="flex-shrink-0 w-[260px] md:w-auto snap-start">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-sm overflow-hidden aspect-[9/16] bg-black/20"
              >
                {post.thumbnail ? (
                  <Image
                    src={post.thumbnail}
                    alt={`IMN Instagram Reel ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 260px, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-black/30" />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">View Reel</span>
                </div>
              </a>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
