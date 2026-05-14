import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Ibex Media Network | Digital-First News from Pakistan",
    template: "%s | Ibex Media Network",
  },
  description:
    "Pakistan's leading digital-first news platform covering stories from Gilgit-Baltistan, climate change, women's empowerment, and more through impactful video storytelling.",
  keywords: [
    "Pakistan news",
    "digital media",
    "Gilgit Baltistan",
    "climate change",
    "video journalism",
    "Ibex Media Network",
    "IMN",
  ],
  authors: [{ name: "Ibex Media Network" }],
  creator: "Ibex Media Network",
  metadataBase: new URL("https://ibexmedianetwork.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ibex Media Network",
    title: "Ibex Media Network | Digital-First News from Pakistan",
    description:
      "Pakistan's leading digital-first news platform covering impactful stories through video journalism.",
    images: [
      {
        url: "/images/imn-logo.png",
        width: 1200,
        height: 630,
        alt: "Ibex Media Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibex Media Network",
    description:
      "Pakistan's leading digital-first news platform.",
    images: ["/images/imn-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
