import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/client";
import { STORIES_PAGE_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/shared/SanityImage";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Read impactful stories from Pakistan — climate change, women's empowerment, culture, politics, and more.",
};

export const revalidate = 60;

// Fallback stories used when Sanity returns nothing
const fallbackStories = [
  {
    _id: "f1",
    title: "The Vanishing Glaciers: A Climate Emergency in the Karakoram",
    slug: { current: "vanishing-glaciers-gb" },
    excerpt:
      "How rising temperatures are reshaping the landscape and lives of northern Pakistan's mountain communities.",
    mainImage: null,
    localImage: "/images/thumbnails/global warming.jpeg",
    publishedAt: "2026-03-20T00:00:00Z",
    author: { name: "Aamir Khan" },
    categories: [{ title: "Climate Change", slug: { current: "climate-change" } }],
  },
  {
    _id: "f2",
    title: "Women Leading Change in Pakistan's Digital Media",
    slug: { current: "women-digital-media" },
    excerpt:
      "Meet the women journalists breaking barriers in Pakistan's evolving media landscape.",
    mainImage: null,
    localImage: "/images/thumbnails/Women suuuup.jpg",
    publishedAt: "2026-03-15T00:00:00Z",
    author: { name: "Fatima Ali" },
    categories: [{ title: "Women's Space", slug: { current: "womens-space" } }],
  },
  {
    _id: "f3",
    title: "Youth Entrepreneurship: Tech Startups from Hunza Valley",
    slug: { current: "tech-startups-hunza" },
    excerpt:
      "Young entrepreneurs in Pakistan's north are launching tech startups gaining global attention.",
    mainImage: null,
    localImage: "/images/thumbnails/Startups.jpeg",
    publishedAt: "2026-03-10T00:00:00Z",
    author: { name: "Sara Hussain" },
    categories: [{ title: "Economy", slug: { current: "economy" } }],
  },
  {
    _id: "f4",
    title: "Load Shedding Crisis — GB's Energy Emergency",
    slug: { current: "load-shedding-gb" },
    excerpt:
      "How prolonged power outages are affecting daily life, businesses, and education across Gilgit-Baltistan.",
    mainImage: null,
    localImage: "/images/thumbnails/Load Sheding in Gilgit Baltistan .jpeg",
    publishedAt: "2026-03-05T00:00:00Z",
    author: { name: "Bilal Shah" },
    categories: [{ title: "Gilgit Baltistan", slug: { current: "gilgit-baltistan" } }],
  },
  {
    _id: "f5",
    title: "The Kalash Valley: Preserving an Ancient Culture",
    slug: { current: "kalash-culture" },
    excerpt:
      "Inside the efforts to preserve the unique traditions and identity of Pakistan's smallest religious minority.",
    mainImage: null,
    localImage: "/images/thumbnails/Culture And stuff.jpeg",
    publishedAt: "2026-02-28T00:00:00Z",
    author: { name: "Anwar Saeed" },
    categories: [{ title: "Arts & Culture", slug: { current: "arts-culture" } }],
  },
  {
    _id: "f6",
    title: "Domestic Violence in Northern Pakistan: Breaking the Silence",
    slug: { current: "domestic-violence-northern-pakistan" },
    excerpt:
      "Brave women and activists fighting to end domestic violence and change deeply rooted cultural norms.",
    mainImage: null,
    localImage: "/images/thumbnails/Women Of Gilgit Baltistan.jpeg",
    publishedAt: "2026-02-20T00:00:00Z",
    author: { name: "Maliha Hussain" },
    categories: [{ title: "Women's Space", slug: { current: "womens-space" } }],
  },
];

type DisplayStory = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset?: { _ref: string }; alt?: string } | null;
  localImage?: string;
  publishedAt?: string;
  author?: { name?: string };
  categories?: { title: string; slug: { current: string }; color?: string }[];
};

async function getStories(): Promise<DisplayStory[]> {
  try {
    const data = await client.fetch(STORIES_PAGE_QUERY);
    if (data?.stories && data.stories.length > 0) {
      return data.stories as DisplayStory[];
    }
    return fallbackStories as DisplayStory[];
  } catch {
    return fallbackStories as DisplayStory[];
  }
}

function StoryThumbnail({
  story,
  className = "object-cover",
}: {
  story: DisplayStory;
  className?: string;
}) {
  if (story.mainImage?.asset?._ref) {
    return (
      <SanityImage
        image={story.mainImage}
        alt={story.mainImage.alt || story.title}
        fill
        className={className}
        priority={false}
      />
    );
  }
  // Fallback: clean dark gradient — image uploaded via Sanity Studio will replace this
  return <div className="absolute inset-0 bg-gradient-to-br from-imn-dark to-imn-gray-800" />;
}

export default async function StoriesPage() {
  const stories = await getStories();
  const coverStory = stories[0];
  const remainingStories = stories.slice(1);

  return (
    <div className="pt-0">
      {/* ===== HERO — Cover Story ===== */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <StoryThumbnail story={coverStory} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 container-wide pb-16 pt-40">
          {coverStory.categories?.[0] && (
            <span className="inline-block bg-imn-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-4">
              {coverStory.categories[0].title}
            </span>
          )}
          <h1 className="font-sans text-4xl md:text-display-sm lg:text-display font-black uppercase tracking-tight text-white mb-4 max-w-3xl leading-[0.95]">
            {coverStory.title}
          </h1>
          {coverStory.excerpt && (
            <p className="text-white/80 text-base md:text-lg max-w-2xl mb-4">
              {coverStory.excerpt}
            </p>
          )}
          <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-6">
            {coverStory.author?.name && <span>{coverStory.author.name}</span>}
            {coverStory.author?.name && coverStory.publishedAt && <span> &middot; </span>}
            {coverStory.publishedAt && <span>{formatDate(coverStory.publishedAt)}</span>}
          </p>
          <Link
            href={`/stories/${coverStory.slug.current}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-imn-red text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors"
          >
            Read Story
          </Link>
        </div>
      </section>

      {/* ===== WRITTEN STORIES ===== */}
      <section id="stories" className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-4">
            Latest Stories
          </h2>
          <p className="text-imn-gray-500 text-base mb-12 max-w-2xl">
            In-depth written coverage, analysis, and features from our team of
            journalists across Pakistan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingStories.map((story) => (
              <Link
                key={story._id}
                href={`/stories/${story.slug.current}`}
                className="group relative overflow-hidden rounded-sm bg-imn-gray-100 aspect-[4/3] block"
              >
                <StoryThumbnail
                  story={story}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {story.categories?.[0] && (
                    <span className="inline-block bg-imn-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-3">
                      {story.categories[0].title}
                    </span>
                  )}
                  <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-2 leading-tight group-hover:text-white/90 transition-colors">
                    {story.title}
                  </h3>
                  {story.excerpt && (
                    <p className="text-white/70 text-sm line-clamp-2 mb-2">
                      {story.excerpt}
                    </p>
                  )}
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                    {story.author?.name && <span>{story.author.name}</span>}
                    {story.author?.name && story.publishedAt && <span> &middot; </span>}
                    {story.publishedAt && <span>{formatDate(story.publishedAt)}</span>}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-32 bg-imn-red">
        <div className="container-wide text-center">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-4">
            Have a Story to Share?
          </h2>
          <p className="text-white/80 text-base mb-10 max-w-lg mx-auto">
            We&apos;re always looking for powerful stories from across Pakistan.
            If you have a story that needs to be told, reach out to us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-imn-dark text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white/90 transition-colors"
          >
            Submit Your Story
          </Link>
        </div>
      </section>
    </div>
  );
}
