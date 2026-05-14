import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import { formatDate } from "@/lib/utils";

interface Story {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: {
    asset?: { _ref: string };
    alt?: string;
  };
  publishedAt?: string;
  categories?: Array<{
    title: string;
    slug: { current: string };
    color?: string;
  }>;
}

interface FeaturedStoriesProps {
  stories?: Story[];
}

const placeholderStories: Story[] = [
  {
    _id: "1",
    title: "The Vanishing Glaciers of Gilgit-Baltistan: A Climate Emergency",
    slug: { current: "vanishing-glaciers-gb" },
    excerpt: "How rising temperatures are reshaping the landscape and lives of northern Pakistan's mountain communities.",
    publishedAt: "2024-12-15",
    categories: [{ title: "Climate Change", slug: { current: "climate-change" } }],
  },
  {
    _id: "2",
    title: "Women Leading Change in Pakistan's Digital Media",
    slug: { current: "women-digital-media" },
    excerpt: "Meet the women journalists breaking barriers in Pakistan's evolving media landscape.",
    publishedAt: "2024-12-10",
    categories: [{ title: "Women's Space", slug: { current: "womens-space" } }],
  },
  {
    _id: "3",
    title: "Inside the Traditional Music Revival of the Northern Areas",
    slug: { current: "music-revival-north" },
    publishedAt: "2024-12-05",
    categories: [{ title: "Arts & Culture", slug: { current: "arts-culture" } }],
  },
  {
    _id: "4",
    title: "Youth Entrepreneurship: Tech Startups from Hunza Valley",
    slug: { current: "tech-startups-hunza" },
    publishedAt: "2024-11-28",
    categories: [{ title: "Economy", slug: { current: "economy" } }],
  },
  {
    _id: "5",
    title: "The Impact of Social Media on Political Discourse in Pakistan",
    slug: { current: "social-media-politics" },
    publishedAt: "2024-11-20",
    categories: [{ title: "Politics & Society", slug: { current: "politics-society" } }],
  },
];

export default function FeaturedStories({ stories }: FeaturedStoriesProps) {
  const displayStories =
    stories && stories.length > 0 ? stories : placeholderStories;
  const [featured, ...rest] = displayStories;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          title="Latest Stories"
          subtitle="Our latest and most impactful reporting"
          linkText="View All Stories"
          linkHref="/stories"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Featured Card */}
          {featured && (
            <Link
              href={`/stories/${featured.slug.current}`}
              className="group relative overflow-hidden rounded-sm bg-imn-gray-100 aspect-[4/3] lg:aspect-auto lg:row-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              {featured.mainImage?.asset ? (
                <Image
                  src="/images/imn-logo.png"
                  alt={featured.mainImage?.alt || featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-imn-dark to-imn-gray-800" />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                {featured.categories?.[0] && (
                  <span className="inline-block bg-imn-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-3">
                    {featured.categories[0].title}
                  </span>
                )}
                <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase text-white mb-3 line-clamp-3 leading-tight">
                  {featured.title}
                </h3>
                {featured.excerpt && (
                  <p className="text-white/60 text-sm line-clamp-2 mb-2">
                    {featured.excerpt}
                  </p>
                )}
                {featured.publishedAt && (
                  <p className="text-white/40 text-xs font-bold uppercase tracking-wider">
                    {formatDate(featured.publishedAt)}
                  </p>
                )}
              </div>
            </Link>
          )}

          {/* Smaller Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.slice(0, 4).map((story) => (
              <Link
                key={story._id}
                href={`/stories/${story.slug.current}`}
                className="group flex flex-col rounded-sm overflow-hidden bg-white border border-imn-gray-100"
              >
                <div className="relative aspect-video bg-imn-gray-100 overflow-hidden">
                  {story.mainImage?.asset ? (
                    <Image
                      src="/images/imn-logo.png"
                      alt={story.mainImage?.alt || story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-imn-gray-200 to-imn-gray-300 flex items-center justify-center">
                      <span className="text-imn-gray-400 text-sm font-bold">IMN</span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  {story.categories?.[0] && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-imn-red mb-2">
                      {story.categories[0].title}
                    </span>
                  )}
                  <h3 className="font-sans text-sm font-bold uppercase text-imn-dark line-clamp-2 group-hover:text-imn-red transition-colors leading-tight">
                    {story.title}
                  </h3>
                  {story.publishedAt && (
                    <p className="text-imn-gray-400 text-xs mt-auto pt-3 font-medium">
                      {formatDate(story.publishedAt)}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
