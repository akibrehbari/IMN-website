"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MAIN_NAV_ITEMS, SPECIAL_THEMES } from "@/lib/constants";
import SocialIcons from "@/components/shared/SocialIcons";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-imn-dark shadow-2xl
          transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Nav Links */}
        <nav className="px-6 pb-4">
          {MAIN_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block py-3 text-sm font-bold uppercase tracking-wider text-white/80
                border-b border-white/10 hover:text-imn-red transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Special Themes */}
        <div className="px-6 pb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-imn-red/60 mb-2">
            Special Themes
          </p>
          {SPECIAL_THEMES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block py-3 text-sm font-bold uppercase tracking-wider text-imn-red
                border-b border-imn-red/20 hover:text-imn-red-light transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Watch & Listen Buttons */}
        <div className="px-6 pb-6 flex gap-2">
          <Link
            href="/shows"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-imn-red text-white text-xs font-bold uppercase tracking-wider rounded-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch
          </Link>
          <a
            href="https://www.youtube.com/@ibexmedianet"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            Listen
          </a>
        </div>

        {/* Social Links */}
        <div className="px-6 pt-4 border-t border-white/10">
          <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
            Follow Us
          </p>
          <SocialIcons variant="light" size="md" />
        </div>
      </div>
    </div>
  );
}
