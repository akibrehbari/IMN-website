import type { Metadata } from "next";
import Image from "next/image";
import { SOCIAL_LINKS, YOUTUBE_PLAYLISTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Video Shows",
  description:
    "Watch IMN's original video shows — documentaries, interview series, and on-the-ground reports from across Pakistan.",
};

export const revalidate = 60;

// All 12 show series with REAL YouTube playlist links and video IDs
const showSeries = [
  {
    id: "originals",
    title: "Originals",
    description:
      "In-depth original documentaries and investigative reports — the flagship stories of Ibex Media Network.",
    thumbnail: "/images/thumbnails/kailash.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS.originals,
    episodeCount: 6,
    latestEpisodes: [
      { title: "Lal Shehzadi", thumbnail: "/images/thumbnails/Women Of Gilgit Baltistan.jpeg", youtubeId: "SLPxA_c1JA0" },
      { title: "Hunzo Hayan", thumbnail: "/images/thumbnails/Culture And stuff.jpeg", youtubeId: "J93k8cSEv1o" },
      { title: "Shandoor — The Highest Polo Ground", thumbnail: "/images/thumbnails/kailash.jpeg", youtubeId: "sZ_YOdSBp_8" },
    ],
  },
  {
    id: "arts-culture",
    title: "Arts & Culture",
    description:
      "Exploring the rich cultural heritage, traditions, and artistic expression across Pakistan's diverse communities.",
    thumbnail: "/images/thumbnails/Culture And stuff.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS["arts-culture"],
    episodeCount: 2,
    latestEpisodes: [
      { title: "The Kalash — A Culture Under Threat", thumbnail: "/images/thumbnails/Culture And stuff.jpeg", youtubeId: "TOywOlkl-2A" },
      { title: "Shandoor Festival", thumbnail: "/images/thumbnails/kailash.jpeg", youtubeId: "sZ_YOdSBp_8" },
    ],
  },
  {
    id: "politics-society",
    title: "Politics & Society",
    description:
      "Hard-hitting interviews and reports on the political and social issues shaping Pakistan's future.",
    thumbnail: "/images/thumbnails/GB Protest.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS["politics-society"],
    episodeCount: 7,
    latestEpisodes: [
      { title: "Fehmida Barcha — Women in Politics", thumbnail: "/images/thumbnails/Women suuuup.jpg", youtubeId: "-aDAN5H_w9c" },
      { title: "History of Pakistan — UN Qazi", thumbnail: "/images/thumbnails/GB Protest.jpeg", youtubeId: "81l-XVP4kAc" },
      { title: "Domestic Violence — Breaking the Silence", thumbnail: "/images/thumbnails/Women Of Gilgit Baltistan.jpeg", youtubeId: "3PlwZZIBz5o" },
    ],
  },
  {
    id: "international",
    title: "International",
    description:
      "Stories that cross borders — immigration, trade, the diaspora, and Pakistan's place in the global conversation.",
    thumbnail: "/images/thumbnails/illegal immegrants.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS.international,
    episodeCount: 4,
    latestEpisodes: [
      { title: "Illegal Immigration Scams", thumbnail: "/images/thumbnails/illegal immegrants.jpeg", youtubeId: "yBYGd5DSyDw" },
      { title: "Pak-China Trade Situation", thumbnail: "/images/thumbnails/Startups.jpeg", youtubeId: "l_BnIBy_N18" },
      { title: "Afghan Refugees — The Untold Story", thumbnail: "/images/thumbnails/challenges and neptism .jpeg", youtubeId: "85GYA90jXpY" },
    ],
  },
  {
    id: "the-earth",
    title: "The Earth",
    description:
      "Climate change, conservation, and environmental stories — tracking Pakistan's ecological frontline.",
    thumbnail: "/images/thumbnails/Climate change.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS["the-earth"],
    episodeCount: 7,
    latestEpisodes: [
      { title: "ICIMOD — Climate Change in the Karakoram", thumbnail: "/images/thumbnails/Climate change.jpeg", youtubeId: "l2fov2a7qkY" },
      { title: "EPA Plastic-Free Documentary", thumbnail: "/images/thumbnails/global warming.jpeg", youtubeId: "ymSL6nVyuDg" },
      { title: "WWF — Saving the Pangolin", thumbnail: "/images/thumbnails/climate change 2.jpeg", youtubeId: "4TZgH3nchYA" },
    ],
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description:
      "Conversations with artists, musicians, and creative minds shaping Pakistan's cultural landscape.",
    thumbnail: "/images/thumbnails/Normeen.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS.entertainment,
    episodeCount: 2,
    latestEpisodes: [
      { title: "Irfan Ali Taj — Music & Identity", thumbnail: "/images/thumbnails/Normeen.jpeg", youtubeId: "jIWtR1bwmyc" },
      { title: "Noorima Rehan — Art & Expression", thumbnail: "/images/thumbnails/gireels.jpg", youtubeId: "XWpkHMVxaEc" },
    ],
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    description:
      "Stories about mental health, healthcare access, and wellness in Pakistan's underserved communities.",
    thumbnail: "/images/thumbnails/Children.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS["health-wellness"],
    episodeCount: 2,
    latestEpisodes: [
      { title: "Mental Health — Breaking the Stigma", thumbnail: "/images/thumbnails/Children.jpeg", youtubeId: "V62N53yeKmY" },
      { title: "Childhood Essentials", thumbnail: "/images/thumbnails/opportunity.png", youtubeId: "3oCsy83qME4" },
    ],
  },
  {
    id: "science-tech",
    title: "Science & Tech",
    description:
      "Freelancers, digital creators, and the tech revolution reshaping opportunities in Pakistan.",
    thumbnail: "/images/thumbnails/youtuber from gilgit baltistan .jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS["science-tech"],
    episodeCount: 1,
    latestEpisodes: [
      { title: "Nadia Iqbal — Freelancing from Pakistan", thumbnail: "/images/thumbnails/youtuber from gilgit baltistan .jpeg", youtubeId: "l0Hsh9MSymk" },
    ],
  },
  {
    id: "economy",
    title: "Economy",
    description:
      "Startups, entrepreneurship, and economic transformation stories from across Pakistan.",
    thumbnail: "/images/thumbnails/Startups.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS.economy,
    episodeCount: 2,
    latestEpisodes: [
      { title: "The Rising Startup Culture — Imran Shams", thumbnail: "/images/thumbnails/Startups.jpeg", youtubeId: "n1COkRTCJ3E" },
      { title: "Waseem Rupani — Business & Innovation", thumbnail: "/images/thumbnails/youtuber from gilgit baltistan .jpeg", youtubeId: "BFvPeABrEeg" },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    description:
      "Athletes, coaches, and the sporting spirit of Pakistan — from polo fields to MMA rings.",
    thumbnail: "/images/thumbnails/rikoti.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS.sports,
    episodeCount: 5,
    latestEpisodes: [
      { title: "Annita — Pakistan's MMA Fighter", thumbnail: "/images/thumbnails/Women suuuup.jpg", youtubeId: "XehnUY7u1XI" },
      { title: "Polo — The Sport of Kings in Chitral", thumbnail: "/images/thumbnails/rikoti.jpeg", youtubeId: "sZ_YOdSBp_8" },
      { title: "Sultan Coach — Training Champions", thumbnail: "/images/thumbnails/GB Protest.jpeg", youtubeId: "Ncl1BjrFSjg" },
    ],
  },
  {
    id: "women-stories",
    title: "Women Stories",
    description:
      "Stories of courage, resilience, and empowerment — women across Pakistan breaking barriers and creating change.",
    thumbnail: "/images/thumbnails/Women Of Gilgit Baltistan.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS.women,
    episodeCount: 6,
    latestEpisodes: [
      { title: "Lal Shehzadi", thumbnail: "/images/thumbnails/Women Of Gilgit Baltistan.jpeg", youtubeId: "SLPxA_c1JA0" },
      { title: "Nayab Ali — Transgender Rights", thumbnail: "/images/thumbnails/Women suuuup.jpg", youtubeId: "F59DMu1898w" },
      { title: "Maliha Hussain — Women's Activism", thumbnail: "/images/thumbnails/Children.jpeg", youtubeId: "tmNL4lwUIzQ" },
    ],
  },
  {
    id: "gilgit-baltistan",
    title: "Gilgit-Baltistan",
    description:
      "Stories from the roof of the world — culture, people, challenges, and transformation in Pakistan's northern frontier.",
    thumbnail: "/images/thumbnails/kailash.jpeg",
    youtubePlaylist: YOUTUBE_PLAYLISTS["gilgit-baltistan"],
    episodeCount: 9,
    latestEpisodes: [
      { title: "GB Youth — Voices of a Generation", thumbnail: "/images/thumbnails/kailash.jpeg", youtubeId: "XBjvh2WfjNQ" },
      { title: "The Last Queen of Hunza", thumbnail: "/images/thumbnails/Culture And stuff.jpeg", youtubeId: "dwNvTZ1Zv9o" },
      { title: "CPEC & Gilgit-Baltistan", thumbnail: "/images/thumbnails/GB Protest.jpeg", youtubeId: "0O2LUBCz5D4" },
    ],
  },
];

export default function ShowsPage() {
  return (
    <div className="pt-0">
      {/* ===== SIMPLE HEADER (no full-screen cover) ===== */}
      <section className="bg-imn-red pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <h1 className="font-sans text-display-sm md:text-display lg:text-display-lg font-black uppercase tracking-tight text-white mb-4 leading-[0.95]">
            Video Shows
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mb-8">
            Watch our original video series — documentaries, interviews, and
            on-the-ground reports from across Pakistan. All shows available on
            our YouTube channel.
          </p>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-imn-dark text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* ===== SHOW SERIES — alternating white/red ===== */}
      {showSeries.map((show, index) => (
        <section
          key={show.id}
          className={`py-20 md:py-28 ${
            index % 2 === 0 ? "bg-white" : "bg-imn-red"
          }`}
        >
          <div className="container-wide">
            {/* Show Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-4 ${
                    index % 2 === 0
                      ? "bg-imn-red/10 text-imn-red"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {show.episodeCount} Episodes
                </span>
                <h2
                  className={`font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight leading-[0.95] ${
                    index % 2 === 0 ? "text-imn-dark" : "text-white"
                  }`}
                >
                  {show.title}
                </h2>
                <p
                  className={`text-base mt-3 max-w-lg ${
                    index % 2 === 0
                      ? "text-imn-gray-500"
                      : "text-white/80"
                  }`}
                >
                  {show.description}
                </p>
              </div>
              <a
                href={show.youtubePlaylist}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex-shrink-0 ${
                  index % 2 === 0
                    ? "bg-imn-red text-white hover:bg-imn-red-dark"
                    : "bg-white text-imn-dark hover:bg-white/90"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Full Playlist
              </a>
            </div>

            {/* Latest Episodes Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${show.latestEpisodes.length >= 3 ? "lg:grid-cols-3" : ""} gap-6`}>
              {show.latestEpisodes.map((episode, i) => (
                <a
                  key={i}
                  href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-video rounded-sm overflow-hidden bg-imn-gray-200">
                    <Image
                      src={episode.thumbnail}
                      alt={episode.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-imn-red/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3
                    className={`font-sans text-sm font-bold uppercase mt-3 transition-colors ${
                      index % 2 === 0
                        ? "text-imn-dark group-hover:text-imn-red"
                        : "text-white group-hover:text-white/80"
                    }`}
                  >
                    {episode.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== SUBSCRIBE CTA ===== */}
      <section className="py-20 md:py-32 bg-imn-red">
        <div className="container-wide text-center">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-white/80 text-base mb-10 max-w-lg mx-auto">
            Subscribe to our YouTube channel and turn on notifications to get
            the latest episodes from all our shows as soon as they drop.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-imn-dark text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe on YouTube
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
