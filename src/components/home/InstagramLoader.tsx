"use client";

import Script from "next/script";

export default function InstagramLoader() {
  return (
    <Script
      src="https://www.instagram.com/embed.js"
      strategy="lazyOnload"
      onLoad={() => {
        const w = window as Window & {
          instgrm?: { Embeds: { process: () => void } };
        };
        if (w.instgrm) w.instgrm.Embeds.process();
      }}
    />
  );
}
