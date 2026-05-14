"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV_ITEMS, SPECIAL_THEMES } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-imn-dark ${
          isScrolled ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/imn-logo-color.png"
                alt="Ibex Media Network"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation — main items + special themes separated */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* Main menu items */}
              {MAIN_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* Separator */}
              <span className="mx-2 w-px h-4 bg-white/20" />

              {/* Special themes — highlighted with underline/different color */}
              {SPECIAL_THEMES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-imn-red hover:text-imn-red-light transition-colors border-b border-imn-red/50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side: Action Buttons + Hamburger */}
            <div className="flex items-center gap-4">
              {/* Watch & Listen buttons — desktop only */}
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="/shows"
                  className="flex items-center gap-1.5 px-4 py-2 bg-imn-red text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch
                </Link>
                <a
                  href="https://www.youtube.com/@ibexmedianet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  Listen
                </a>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-sm text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
