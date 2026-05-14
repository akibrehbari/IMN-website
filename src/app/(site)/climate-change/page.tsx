import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { YOUTUBE_PLAYLISTS } from "@/lib/constants";
import { client } from "@/sanity/client";
import { STORIES_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/shared/SanityImage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Climate Change",
  description:
    "Covering climate change and environmental stories from Pakistan — glacial melting, floods, sustainable energy, and community resilience.",
};

// Video content — REAL YouTube links from IMN "The Earth" playlist
const videos = [
  { id: "1", title: "ICIMOD — Climate Change in the Karakoram", thumbnail: "/images/thumbnails/Climate change.jpeg", youtubeId: "l2fov2a7qkY" },
  { id: "2", title: "EPA Plastic-Free Documentary", thumbnail: "/images/thumbnails/global warming.jpeg", youtubeId: "ymSL6nVyuDg" },
  { id: "3", title: "EPA Plastic-Free Animation", thumbnail: "/images/thumbnails/climate change 2.jpeg", youtubeId: "e-oJATapCEY" },
  { id: "4", title: "Doc Sahiba — Healthcare & Environment", thumbnail: "/images/thumbnails/challenges and neptism .jpeg", youtubeId: "syWrCg9ZgYI" },
  { id: "5", title: "EVK2CNR — High-Altitude Research", thumbnail: "/images/thumbnails/Load Sheding in Gilgit Baltistan .jpeg", youtubeId: "zAmOA87jgtU" },
  { id: "6", title: "WWF — Saving the Pangolin", thumbnail: "/images/thumbnails/opportunity.png", youtubeId: "4TZgH3nchYA" },
];

// Fallback written articles (shown when Sanity returns nothing)
const fallbackStories = [
  {
    _id: "f1",
    title: "Pakistan's Glacier Outburst Floods: The New Normal?",
    slug: { current: "vanishing-glaciers-gb" },
    excerpt: "Communities living in the shadow of melting glaciers face increasing threats as temperatures continue to rise.",
    mainImage: null,
    localImage: "/images/thumbnails/global warming.jpeg",
    categories: [{ title: "Glaciers", slug: { current: "climate-change" } }],
  },
  {
    _id: "f2",
    title: "The Billion Tree Tsunami: Five Years Later",
    slug: { current: "renewable-energy-pakistan" },
    excerpt: "Assessing the real impact of Pakistan's ambitious reforestation initiative on communities and ecosystems.",
    mainImage: null,
    localImage: "/images/thumbnails/Climate change.jpeg",
    categories: [{ title: "Reforestation", slug: { current: "climate-change" } }],
  },
  {
    _id: "f3",
    title: "Urban Heat Islands: Cities Getting Hotter",
    slug: { current: "glaciers-receding-gilgit-baltistan" },
    excerpt: "Concrete jungles are intensifying heat waves in major Pakistani cities, threatening public health.",
    mainImage: null,
    localImage: "/images/thumbnails/climate change 2.jpeg",
    categories: [{ title: "Urban Climate", slug: { current: "climate-change" } }],
  },
  {
    _id: "f4",
    title: "Solar Energy Revolution in Rural Pakistan",
    slug: { current: "green-energy-projects-hunza" },
    excerpt: "Farmers are turning to solar power, transforming agriculture and livelihoods in remote regions.",
    mainImage: null,
    localImage: "/images/thumbnails/opportunity.png",
    categories: [{ title: "Clean Energy", slug: { current: "climate-change" } }],
  },
];

type DisplayStory = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset?: { _ref: string }; alt?: string } | null;
  localImage?: string;
  categories?: { title: string; slug: { current: string } }[];
};

async function getStories(): Promise<DisplayStory[]> {
  try {
    const data = await client.fetch(STORIES_BY_CATEGORY_QUERY, { categorySlug: "climate-change" });
    if (data && data.length > 0) return data as DisplayStory[];
    return fallbackStories as DisplayStory[];
  } catch {
    return fallbackStories as DisplayStory[];
  }
}

export default async function ClimateChangePage() {
  const stories = await getStories();
  return (
    <div className="pt-0">
      {/* ===== SIMPLE HEADER ===== */}
      <section className="bg-imn-red pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <h1 className="font-sans text-display-sm md:text-display lg:text-display-lg font-black uppercase tracking-tight text-white mb-4 leading-[0.95]">
            Climate Change
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            From melting glaciers to devastating floods, Pakistan is on the frontlines of climate change. We tell the stories the world needs to hear.
          </p>
        </div>
      </section>

      {/* ===== VIDEO PLAYLIST ===== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark leading-[0.95]">
                Watch Our Coverage
              </h2>
              <p className="text-imn-gray-500 text-base mt-3 max-w-lg">
                On-the-ground reporting, documentaries, and explainers on Pakistan&apos;s climate emergency.
              </p>
            </div>
            <a
              href={YOUTUBE_PLAYLISTS["the-earth"]}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-imn-red text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              View Full Playlist
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video rounded-sm overflow-hidden bg-imn-gray-100">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-imn-red/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-sans text-sm font-bold uppercase text-imn-dark mt-3 group-hover:text-imn-red transition-colors">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <a href={YOUTUBE_PLAYLISTS["the-earth"]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-imn-red text-white text-sm font-bold uppercase tracking-wider rounded-sm">
              View Full Playlist
            </a>
          </div>
        </div>
      </section>

      {/* ===== WRITTEN ARTICLES ===== */}
      <section className="py-20 md:py-32 bg-imn-red">
        <div className="container-wide">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-4">
            Climate Stories
          </h2>
          <p className="text-white/80 text-base mb-12 max-w-2xl">
            In-depth reporting on climate change, environmental policy, and the communities on the frontlines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story) => (
              <Link
                key={story._id}
                href={`/stories/${story.slug.current}`}
                className="group relative overflow-hidden rounded-sm bg-imn-gray-100 aspect-[4/3] block"
              >
                {story.mainImage?.asset?._ref ? (
                  <SanityImage
                    image={story.mainImage}
                    alt={story.mainImage.alt || story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-imn-dark to-imn-gray-800" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {story.categories?.[0] && (
                    <span className="inline-block bg-white text-imn-dark text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-3">
                      {story.categories[0].title}
                    </span>
                  )}
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-white/90 transition-colors">{story.title}</h3>
                  {story.excerpt && <p className="text-white/70 text-sm line-clamp-2">{story.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
