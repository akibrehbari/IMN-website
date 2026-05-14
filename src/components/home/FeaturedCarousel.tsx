import Image from "next/image";
import Link from "next/link";

interface Story {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset?: { _ref: string };
    alt?: string;
  };
  categories?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

interface FeaturedCarouselProps {
  stories?: Story[];
}

const placeholderStories: Story[] = [
  { _id: "1", title: "The Vanishing Glaciers of Gilgit-Baltistan", slug: { current: "vanishing-glaciers" }, categories: [{ title: "Climate Change", slug: { current: "climate-change" } }] },
  { _id: "2", title: "Women Leading Change in Digital Media", slug: { current: "women-digital-media" }, categories: [{ title: "Women's Space", slug: { current: "womens-space" } }] },
  { _id: "3", title: "Traditional Music Revival of the North", slug: { current: "music-revival" }, categories: [{ title: "Arts & Culture", slug: { current: "arts-culture" } }] },
  { _id: "4", title: "Youth Tech Startups from Hunza Valley", slug: { current: "tech-startups" }, categories: [{ title: "Economy", slug: { current: "economy" } }] },
  { _id: "5", title: "Social Media and Political Discourse", slug: { current: "social-media-politics" }, categories: [{ title: "Politics", slug: { current: "politics-society" } }] },
];

export default function FeaturedCarousel({ stories }: FeaturedCarouselProps) {
  const displayStories = stories && stories.length > 0 ? stories.slice(0, 5) : placeholderStories;

  return (
    <section className="py-20 md:py-32">
      <div className="container-wide">
        <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-12">
          Featured Stories
        </h2>

        {/* Desktop: 5-col grid, Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {displayStories.map((story) => (
            <Link
              key={story._id}
              href={`/stories/${story.slug.current}`}
              className="group relative flex-shrink-0 w-64 lg:w-auto aspect-[3/4] rounded-sm overflow-hidden snap-start bg-imn-gray-200"
            >
              {/* Image */}
              {story.mainImage?.asset ? (
                <Image
                  src="/images/imn-logo.png"
                  alt={story.mainImage?.alt || story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-imn-dark to-imn-gray-700" />
              )}

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-imn-red/0 group-hover:bg-imn-red/20 transition-colors duration-300" />

              {/* Content - always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                {story.categories?.[0] && (
                  <span className="inline-block bg-imn-red text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 mb-2">
                    {story.categories[0].title}
                  </span>
                )}
                <h3 className="font-sans text-sm md:text-base font-bold uppercase text-white line-clamp-3 leading-tight">
                  {story.title}
                </h3>
                <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                  Read More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
