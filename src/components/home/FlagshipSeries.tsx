import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

interface Show {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  thumbnail?: {
    asset?: { _ref: string };
  };
  showType?: string;
}

interface FlagshipSeriesProps {
  shows?: Show[];
}

const placeholderShows: Show[] = [
  {
    _id: "1",
    title: "Originals",
    slug: { current: "originals" },
    description: "In-depth original documentaries and reports from across Pakistan",
    showType: "video",
  },
  {
    _id: "2",
    title: "GB Diaries",
    slug: { current: "gb-diaries" },
    description: "Stories from the mountains of Gilgit-Baltistan",
    showType: "video",
  },
  {
    _id: "3",
    title: "Climate Watch",
    slug: { current: "climate-watch" },
    description: "Tracking environmental change and its impact on communities",
    showType: "video",
  },
  {
    _id: "4",
    title: "Her Voice",
    slug: { current: "her-voice" },
    description: "Amplifying women's stories and perspectives from Pakistan",
    showType: "podcast",
  },
];

export default function FlagshipSeries({ shows }: FlagshipSeriesProps) {
  const displayShows = shows && shows.length > 0 ? shows : placeholderShows;

  return (
    <section className="section-padding bg-imn-gray-50">
      <div className="container-wide">
        <SectionHeading
          title="Flagship Series"
          subtitle="Our most popular shows and series"
          linkText="See All Shows"
          linkHref="/shows"
        />

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {displayShows.map((show) => (
            <Link
              key={show._id}
              href={`/shows/${show.slug.current}`}
              className="group flex-shrink-0 w-72 md:w-80 snap-start"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-imn-gray-200 mb-4">
                {show.thumbnail?.asset ? (
                  <Image
                    src="/images/imn-logo.png"
                    alt={show.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-imn-dark to-imn-red/20 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 text-white/40 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <div className="w-14 h-14 rounded-full bg-imn-red flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium">
                    {show.showType === "podcast" ? "Podcast" : "Video"}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-lg font-bold text-imn-dark group-hover:text-imn-red transition-colors mb-1">
                {show.title}
              </h3>
              {show.description && (
                <p className="text-imn-gray-500 text-sm line-clamp-2">
                  {show.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
