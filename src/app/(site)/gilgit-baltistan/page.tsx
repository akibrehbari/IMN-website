import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { YOUTUBE_PLAYLISTS } from "@/lib/constants";
import { client } from "@/sanity/client";
import { STORIES_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/shared/SanityImage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Gilgit Baltistan",
  description:
    "Stories from the roof of the world — exploring the culture, people, environment, and transformation of Pakistan's northern frontier.",
};

// Video content — REAL YouTube links from IMN GB playlist
const videos = [
  { id: "1", title: "Gilgit Baltistan Youth — Voices of a Generation", thumbnail: "/images/thumbnails/kailash.jpeg", youtubeId: "XBjvh2WfjNQ" },
  { id: "2", title: "Women's Rights in Gilgit-Baltistan", thumbnail: "/images/thumbnails/Women Of Gilgit Baltistan.jpeg", youtubeId: "wfY1sXANuLs" },
  { id: "3", title: "CPEC & Gilgit-Baltistan", thumbnail: "/images/thumbnails/GB Protest.jpeg", youtubeId: "0O2LUBCz5D4" },
  { id: "4", title: "The Last Queen of Hunza", thumbnail: "/images/thumbnails/Culture And stuff.jpeg", youtubeId: "dwNvTZ1Zv9o" },
  { id: "5", title: "History of Gilgit-Baltistan", thumbnail: "/images/thumbnails/rikoti.jpeg", youtubeId: "0VFp_2Y6dtE" },
  { id: "6", title: "Tourism & Gilgit-Baltistan", thumbnail: "/images/thumbnails/youtuber from gilgit baltistan .jpeg", youtubeId: "LFB_n00WihI" },
];

// Fallback written articles
const fallbackStories = [
  {
    _id: "f1",
    title: "The Vanishing Glaciers of Karakoram",
    slug: { current: "vanishing-glaciers-gb" },
    excerpt: "How rising temperatures are reshaping the landscape of northern Pakistan and threatening communities downstream.",
    mainImage: null,
    localImage: "/images/thumbnails/global warming.jpeg",
    categories: [{ title: "Environment", slug: { current: "gilgit-baltistan" } }],
  },
  {
    _id: "f2",
    title: "Hunza Valley's Traditional Craft Revival",
    slug: { current: "music-revival-north" },
    excerpt: "Local artisans preserve centuries-old techniques while finding modern markets for their work.",
    mainImage: null,
    localImage: "/images/thumbnails/Culture And stuff.jpeg",
    categories: [{ title: "Culture", slug: { current: "gilgit-baltistan" } }],
  },
  {
    _id: "f3",
    title: "Education in the Mountains",
    slug: { current: "tech-startups-hunza" },
    excerpt: "How communities are ensuring education reaches even the most remote villages above the clouds.",
    mainImage: null,
    localImage: "/images/thumbnails/Children.jpeg",
    categories: [{ title: "Education", slug: { current: "gilgit-baltistan" } }],
  },
  {
    _id: "f4",
    title: "Ancient Silk Road's Modern Tourism Boom",
    slug: { current: "floods-mental-health-gilgit-baltistan" },
    excerpt: "International travelers are rediscovering the historic route through Gilgit-Baltistan.",
    mainImage: null,
    localImage: "/images/thumbnails/rikoti.jpeg",
    categories: [{ title: "Tourism", slug: { current: "gilgit-baltistan" } }],
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
    const data = await client.fetch(STORIES_BY_CATEGORY_QUERY, { categorySlug: "gilgit-baltistan" });
    if (data && data.length > 0) return data as DisplayStory[];
    return fallbackStories as DisplayStory[];
  } catch {
    return fallbackStories as DisplayStory[];
  }
}

export default async function GilgitBaltistanPage() {
  const stories = await getStories();
  return (
    <div className="pt-0">
      {/* ===== SIMPLE HEADER ===== */}
      <section className="bg-imn-red pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <h1 className="font-sans text-display-sm md:text-display lg:text-display-lg font-black uppercase tracking-tight text-white mb-4 leading-[0.95]">
            Gilgit Baltistan
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Stories from the roof of the world — exploring culture, people, challenges, and transformation in Pakistan&apos;s northern frontier.
          </p>
        </div>
      </section>

      {/* ===== VIDEO PLAYLIST ===== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark leading-[0.95]">
                Watch Our Videos
              </h2>
              <p className="text-imn-gray-500 text-base mt-3 max-w-lg">
                Cinematic documentaries, on-the-ground reports, and stories from every corner of Gilgit-Baltistan.
              </p>
            </div>
            <a
              href={YOUTUBE_PLAYLISTS["gilgit-baltistan"]}
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
            <a href={YOUTUBE_PLAYLISTS["gilgit-baltistan"]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-imn-red text-white text-sm font-bold uppercase tracking-wider rounded-sm">
              View Full Playlist
            </a>
          </div>
        </div>
      </section>

      {/* ===== WRITTEN ARTICLES ===== */}
      <section className="py-20 md:py-32 bg-imn-red">
        <div className="container-wide">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-4">
            Featured Stories
          </h2>
          <p className="text-white/80 text-base mb-12 max-w-2xl">
            In-depth coverage from the valleys, peaks, and communities of Gilgit-Baltistan.
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
