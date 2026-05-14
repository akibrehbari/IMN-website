import Image from "next/image";
import Link from "next/link";
import { YOUTUBE_PLAYLISTS } from "@/lib/constants";
import AnimateIn from "@/components/shared/AnimateIn";
import { AnimateStagger, AnimateStaggerItem } from "@/components/shared/AnimateStagger";

// 6 representative playlists to showcase on the homepage
const playlists = [
  {
    id: "originals",
    title: "Originals",
    description: "IMN's flagship original documentaries and investigations.",
    thumbnail: "/images/thumbnails/kailash.jpeg",
    href: YOUTUBE_PLAYLISTS.originals,
  },
  {
    id: "arts-culture",
    title: "Arts & Culture",
    description: "Celebrating Pakistan's rich cultural heritage and creative voices.",
    thumbnail: "/images/thumbnails/Culture And stuff.jpeg",
    href: YOUTUBE_PLAYLISTS["arts-culture"],
  },
  {
    id: "politics-society",
    title: "Politics & Society",
    description: "In-depth coverage of Pakistan's political landscape and social issues.",
    thumbnail: "/images/thumbnails/GB Protest.jpeg",
    href: YOUTUBE_PLAYLISTS["politics-society"],
  },
  {
    id: "the-earth",
    title: "The Earth",
    description: "Climate change, environment, and sustainability stories from Pakistan.",
    thumbnail: "/images/thumbnails/Climate change.jpeg",
    href: YOUTUBE_PLAYLISTS["the-earth"],
  },
  {
    id: "women",
    title: "Women Stories",
    description: "Amplifying the voices and stories of women across Pakistan.",
    thumbnail: "/images/thumbnails/Women Of Gilgit Baltistan.jpeg",
    href: YOUTUBE_PLAYLISTS.women,
  },
  {
    id: "gilgit-baltistan",
    title: "Gilgit-Baltistan",
    description: "Stories from the roof of the world — culture, people, and transformation.",
    thumbnail: "/images/thumbnails/youtuber from gilgit baltistan .jpeg",
    href: YOUTUBE_PLAYLISTS["gilgit-baltistan"],
  },
];

export default function WatchOurContent() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-wide">
        <AnimateIn className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-sans text-3xl md:text-display-sm lg:text-display font-black uppercase tracking-tight text-imn-dark leading-[0.95]">
              Watch Our Content
            </h2>
            <p className="text-imn-gray-500 text-base mt-3 max-w-lg">
              Explore our playlists — from cinematic documentaries to breaking stories across every category.
            </p>
          </div>
          <Link
            href="/shows"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-imn-red text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors"
          >
            Watch More
          </Link>
        </AnimateIn>

        {/* Playlist Grid */}
        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <AnimateStaggerItem key={playlist.id}>
            <a
              key={playlist.id}
              href={playlist.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-video rounded-sm overflow-hidden bg-imn-gray-100">
                <Image
                  src={playlist.thumbnail}
                  alt={playlist.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-imn-red/90 rounded-sm group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Watch Playlist</span>
                  </div>
                </div>
              </div>
              <h3 className="font-sans text-sm font-bold uppercase text-imn-dark mt-3 group-hover:text-imn-red transition-colors leading-tight">
                {playlist.title}
              </h3>
              <p className="text-imn-gray-500 text-xs mt-1 line-clamp-2">
                {playlist.description}
              </p>
            </a>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/shows"
            className="inline-flex items-center gap-2 px-8 py-4 bg-imn-red text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors"
          >
            Watch More
          </Link>
        </div>
      </div>
    </section>
  );
}
