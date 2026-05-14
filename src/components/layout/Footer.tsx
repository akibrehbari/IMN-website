import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import SocialIcons from "@/components/shared/SocialIcons";

const footerLinks = {
  quickLinks: [
    { label: "Stories", href: "/stories" },
    { label: "Shows", href: "/shows" },
    { label: "Impact", href: "/impact" },
    { label: "Contact", href: "/contact" },
  ],
  categories: [
    { label: "Gilgit Baltistan", href: "/gilgit-baltistan" },
    { label: "Climate Change", href: "/climate-change" },
    { label: "Women's Space", href: "/womens-space" },
    { label: "Arts & Culture", href: "/stories?category=arts-culture" },
    { label: "Politics & Society", href: "/stories?category=politics-society" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-imn-red text-white">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/imn-logo-color.png"
                alt={SITE_NAME}
                width={160}
                height={45}
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Pakistan&apos;s leading digital-first news platform.
              We tell stories that matter through impactful video journalism.
            </p>

            {/* Social Icons */}
            <SocialIcons variant="red" size="md" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Stay Connected
            </h3>
            <div className="space-y-3 text-sm text-white/80 mb-6">
              <p>
                <a
                  href="mailto:info@ibexmedianetwork.com"
                  className="hover:text-white transition-colors"
                >
                  info@ibexmedianetwork.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+923115804020"
                  className="hover:text-white transition-colors"
                >
                  +92 311 580 4020
                </a>
              </p>
            </div>

            <h4 className="text-sm font-bold text-white/50 mb-3 uppercase tracking-wider">
              Newsletter
            </h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/20 border border-white/30 rounded-sm px-3 py-2
                  text-sm text-white placeholder:text-white/50
                  focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-imn-red px-4 py-2
                  rounded-sm text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/90"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-bold uppercase tracking-wider">
            Empowering voices. Amplifying impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
