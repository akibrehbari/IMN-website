import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/client";
import { STORY_QUERY, STORY_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/image";
import { formatDate } from "@/lib/utils";
import Button from "@/components/shared/Button";
import SanityImage from "@/components/shared/SanityImage";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(STORY_SLUGS_QUERY);
    return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const story = await client.fetch(STORY_QUERY, { slug });
    if (!story) {
      return {
        title: "Story Not Found | Stories",
        description: "This story could not be found.",
      };
    }
    return {
      title: story.seo?.metaTitle || `${story.title} | Stories`,
      description:
        story.seo?.metaDescription ||
        "Read this impactful story from Ibex Media Network.",
      openGraph: story.seo?.ogImage?.asset
        ? {
            images: [
              {
                url: urlFor(story.seo.ogImage as Parameters<typeof urlFor>[0])
                  .width(1200)
                  .height(630)
                  .url(),
              },
            ],
          }
        : undefined,
    };
  } catch {
    return {
      title: "Story | Stories",
      description: "Read this impactful story from Ibex Media Network.",
    };
  }
}

async function getStory(slug: string) {
  try {
    return await client.fetch(STORY_QUERY, { slug });
  } catch (error) {
    console.error("Error fetching story:", error);
    return null;
  }
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = await getStory(slug);

  if (!story) {
    return (
      <article className="pt-0">
        <div className="relative min-h-[50vh] bg-imn-dark flex items-end mb-8">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          <div className="relative z-10 container-narrow pb-12 pt-40">
            <span className="inline-block bg-imn-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-4">
              Story
            </span>
            <h1 className="font-sans text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-[0.95]">
              {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </h1>
            <div className="flex items-center gap-4 text-white/50 text-xs font-bold uppercase tracking-wider">
              <span>IMN Editorial</span>
            </div>
          </div>
        </div>

        <div className="container-narrow">
          <div className="article-content">
            <p className="text-xl text-imn-gray-600 leading-relaxed mb-8">
              This story will display full content once published in Sanity CMS.
              Content editors can add rich text, images, YouTube embeds, and more.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Button href="/stories" variant="secondary">
              Back to All Stories
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="pt-0">
      {/* Hero Image / Cover */}
      <div className="relative min-h-[50vh] bg-imn-dark flex items-end mb-8">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-10" />
        {story.mainImage?.asset ? (
          <SanityImage
            image={story.mainImage}
            alt={story.mainImage?.alt || story.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-imn-dark to-imn-gray-800" />
        )}
        <div className="relative z-20 container-narrow pb-12 pt-40">
          {story.categories?.[0] && (
            <span className="inline-block bg-imn-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-4">
              {story.categories[0].title}
            </span>
          )}
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-[0.95]">
            {story.title}
          </h1>
          {story.subtitle && (
            <p className="text-white/70 text-lg mb-4">{story.subtitle}</p>
          )}
          <div className="flex items-center gap-4 text-white/50 text-xs font-bold uppercase tracking-wider">
            {story.author?.name && <span>By {story.author.name}</span>}
            {story.author?.name && story.publishedAt && <span>&middot;</span>}
            {story.publishedAt && <span>{formatDate(story.publishedAt)}</span>}
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="container-narrow">
        {story.coverVideo?.url && (
          <div className="relative aspect-video rounded-sm overflow-hidden mb-8">
            <iframe
              src={`https://www.youtube.com/embed/${story.coverVideo.url}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={story.title}
            />
          </div>
        )}

        {story.body && (
          <div className="article-content">
            <PortableTextRenderer value={story.body} />
          </div>
        )}

        {story.tags && story.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-imn-gray-100">
            {story.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-imn-gray-100 text-imn-gray-600 text-xs font-bold uppercase tracking-wider rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {story.author && (
          <div className="mt-8 p-6 bg-imn-gray-50 rounded-sm flex gap-4">
            <div className="w-16 h-16 rounded-sm bg-imn-gray-200 flex-shrink-0 overflow-hidden">
              {story.author.image?.asset && (
                <SanityImage
                  image={story.author.image}
                  alt={story.author.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div>
              <h4 className="font-bold text-imn-dark uppercase text-sm">{story.author.name}</h4>
              {story.author.role && (
                <p className="text-sm text-imn-gray-500">{story.author.role}</p>
              )}
            </div>
          </div>
        )}

        {story.relatedStories && story.relatedStories.length > 0 && (
          <div className="mt-12">
            <h3 className="font-sans text-2xl font-black uppercase text-imn-dark mb-6">
              Related Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {story.relatedStories.map(
                (related: {
                  _id: string;
                  title: string;
                  slug: { current: string };
                  mainImage?: { asset?: { _ref: string }; alt?: string };
                  publishedAt?: string;
                }) => (
                  <Link
                    key={related._id}
                    href={`/stories/${related.slug.current}`}
                    className="group rounded-sm overflow-hidden border border-imn-gray-100"
                  >
                    <div className="aspect-video bg-imn-gray-100 relative overflow-hidden">
                      {related.mainImage?.asset ? (
                        <SanityImage
                          image={related.mainImage}
                          alt={related.mainImage?.alt || related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-imn-gray-100 flex items-center justify-center">
                          <span className="text-imn-gray-400 text-sm font-bold">IMN</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-sans text-sm font-bold uppercase text-imn-dark group-hover:text-imn-red transition-colors line-clamp-2 leading-tight">
                        {related.title}
                      </h4>
                      {related.publishedAt && (
                        <p className="text-xs text-imn-gray-400 mt-2 font-medium">
                          {formatDate(related.publishedAt)}
                        </p>
                      )}
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button href="/stories" variant="secondary">
            Back to All Stories
          </Button>
        </div>
      </div>
    </article>
  );
}
