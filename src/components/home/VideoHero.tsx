"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

interface VideoHeroProps {
  headline?: string;
  subheadline?: string;
  videoUrl?: string;
  youtubeId?: string;
}

export default function VideoHero({
  headline = "From Grassroots to Global",
  subheadline = "Ibex Media Network is one of Pakistan\u2019s largest digital-first news platforms. We take pride in spotlighting stories that are often untold in today\u2019s mainstream media landscape.",
  youtubeId = "SLPxA_c1JA0",
}: VideoHeroProps) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 z-0">
        {/* Poster image fallback — shows immediately while YouTube loads */}
        <img
          src="/images/thumbnails/kailash.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {youtubeId ? (
          <div className="w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
              title="IMN Cover Video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] min-w-full min-h-full"
              style={{ border: "none", pointerEvents: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-imn-dark via-imn-dark-light to-imn-gray-800" />
        )}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pb-16 md:pb-24 pt-40">
        <div className="max-w-4xl">
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-6 leading-[0.95] animate-fade-up">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed animate-fade-up">
            {subheadline}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up">
            <Link
              href="/shows"
              className="inline-flex items-center gap-2 px-8 py-4 bg-imn-red text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch
            </Link>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              Listen
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
