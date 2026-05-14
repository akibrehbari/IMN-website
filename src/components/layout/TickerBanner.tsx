"use client";

import { useState } from "react";

const TICKER_TEXT =
  "STORIES THAT MOVE MOUNTAINS \u00A0\u2022\u00A0 DIGITAL-FIRST NEWS FROM PAKISTAN \u00A0\u2022\u00A0 AMPLIFYING UNDERREPRESENTED VOICES \u00A0\u2022\u00A0 ";

export default function TickerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-imn-red text-white py-2 overflow-hidden relative">
      <div className="flex animate-marquee-fast whitespace-nowrap">
        {/* Duplicate text for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-xs font-bold uppercase tracking-[0.2em] mx-0"
          >
            {TICKER_TEXT}
          </span>
        ))}
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
