export const SITE_NAME = "Ibex Media Network";
export const SITE_URL = "https://ibexmedianetwork.com";
export const SITE_TAGLINE =
  "Pakistan's leading digital-first news platform";

// Main menu items
export const MAIN_NAV_ITEMS = [
  { label: "Stories", href: "/stories" },
  { label: "Video Shows", href: "/shows" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
] as const;

// Special themes - highlighted differently in nav
export const SPECIAL_THEMES = [
  { label: "Gilgit Baltistan", href: "/gilgit-baltistan" },
  { label: "Climate Change", href: "/climate-change" },
  { label: "Women's Space", href: "/womens-space" },
] as const;

// Combined for backward compat
export const NAV_ITEMS = [...MAIN_NAV_ITEMS, ...SPECIAL_THEMES];

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@ibexmedianet",
  facebook: "https://www.facebook.com/ibexmedianetwork",
  instagram: "https://www.instagram.com/ibexmedianetwork",
  twitter: "https://twitter.com/IbexMedianetwrk",
  linkedin: "https://www.linkedin.com/company/ibexmedianetwork",
  tiktok: "https://www.tiktok.com/@ibexmedianetwork",
  threads: "https://www.threads.net/@ibexmedianetwork",
} as const;

export const WHATSAPP_NUMBER = "923115804020";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CATEGORIES = [
  { title: "Originals", slug: "originals" },
  { title: "Arts & Culture", slug: "arts-culture" },
  { title: "Politics & Society", slug: "politics-society" },
  { title: "International", slug: "international" },
  { title: "The Earth", slug: "the-earth" },
  { title: "Entertainment", slug: "entertainment" },
  { title: "Health & Wellness", slug: "health-wellness" },
  { title: "Science & Tech", slug: "science-tech" },
  { title: "Economy", slug: "economy" },
  { title: "Sports", slug: "sports" },
] as const;

// YouTube Playlist URLs per category
export const YOUTUBE_PLAYLISTS = {
  originals: "https://www.youtube.com/playlist?list=PLdFN42xTEgdZIOCQ6co55U0H595tU8trs",
  "arts-culture": "https://www.youtube.com/playlist?list=PLdFN42xTEgdb1fxH5YarYxDrIE3szB_ER",
  "politics-society": "https://www.youtube.com/playlist?list=PLdFN42xTEgdbCCJwnRWFcO3mE6gIi6knb",
  international: "https://www.youtube.com/playlist?list=PLdFN42xTEgdZCzVWrAjq_f5JWn_kLkik6",
  "the-earth": "https://www.youtube.com/playlist?list=PLdFN42xTEgdbQ5pWFy0s1oBhnHafqzMqU",
  entertainment: "https://www.youtube.com/playlist?list=PLdFN42xTEgdYVGlU1BXsUROcvFywqCsNy",
  "health-wellness": "https://www.youtube.com/playlist?list=PLdFN42xTEgdYwr0IzQ3sPS_hQtORdHv94",
  "science-tech": "https://www.youtube.com/playlist?list=PLdFN42xTEgdZWI9_zSW2AEGI7HUm-78CC",
  economy: "https://www.youtube.com/playlist?list=PLdFN42xTEgdaDWUya8NPa2nVN0te9fyWc",
  sports: "https://www.youtube.com/playlist?list=PLdFN42xTEgdZ6-A_QknLuNHpUl1MoLsvu",
  women: "https://www.youtube.com/playlist?list=PLdFN42xTEgda1jirBFnGs-i2QfPyAmstH",
  "gilgit-baltistan": "https://www.youtube.com/playlist?list=PLdFN42xTEgdba3BNuIp1gmSXbXI2HLHeQ",
} as const;

export const STORIES_PER_PAGE = 12;
