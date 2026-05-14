import { groq } from "next-sanity";

// =====================
// HOME PAGE QUERIES
// =====================

export const HOME_QUERY = groq`{
  "settings": *[_type == "siteSettings"][0]{
    siteName,
    tagline,
    heroVideoUrl,
    heroHeadline,
    heroSubheadline,
    stats[]{
      label,
      value,
      numericValue,
      suffix
    }
  },
  "featuredStories": *[_type == "story" && featured == true] | order(publishedAt desc)[0...5]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    categories[]->{ title, slug, color }
  },
  "flagshipShows": *[_type == "show" && featured == true]{
    _id,
    title,
    slug,
    thumbnail,
    showType,
    description
  },
  "partners": *[_type == "partner"] | order(tier asc){
    _id,
    name,
    logo,
    url,
    tier
  }
}`;

// =====================
// STORIES QUERIES
// =====================

export const STORIES_PAGE_QUERY = groq`{
  "stories": *[_type == "story"] | order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{ name, image },
    categories[]->{ title, slug, color }
  },
  "totalCount": count(*[_type == "story"]),
  "categories": *[_type == "category"] | order(title asc){
    _id,
    title,
    slug
  }
}`;

export const STORIES_BY_CATEGORY_QUERY = groq`
  *[_type == "story" && $categorySlug in categories[]->slug.current]
  | order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{ name, image },
    categories[]->{ title, slug, color }
  }
`;

export const MORE_STORIES_QUERY = groq`
  *[_type == "story"] | order(publishedAt desc)[$start...$end]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{ name, image },
    categories[]->{ title, slug, color }
  }
`;

export const STORY_QUERY = groq`
  *[_type == "story" && slug.current == $slug][0]{
    title,
    subtitle,
    body,
    mainImage,
    coverVideo,
    publishedAt,
    author->{ name, image, role, bio },
    categories[]->{ title, slug, color },
    tags,
    relatedStories[]->{
      _id, title, slug, mainImage, publishedAt,
      categories[]->{ title, slug, color }
    },
    seo
  }
`;

export const STORY_SLUGS_QUERY = groq`
  *[_type == "story"]{ "slug": slug.current }
`;

// =====================
// CATEGORY PAGE QUERIES
// =====================

export const CATEGORY_PAGE_QUERY = groq`{
  "category": *[_type == "category" && slug.current == $slug][0]{
    title,
    description,
    heroImage,
    color,
    seo
  },
  "stories": *[_type == "story" && $slug in categories[]->slug.current]
    | order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{ name, image },
    categories[]->{ title, slug, color }
  },
  "totalCount": count(*[_type == "story" && $slug in categories[]->slug.current])
}`;

// =====================
// SHOWS QUERIES
// =====================

export const SHOWS_PAGE_QUERY = groq`{
  "videoShows": *[_type == "show" && showType == "video"]{
    _id,
    title,
    slug,
    description,
    thumbnail,
    youtubePlaylistId
  },
  "podcastShows": *[_type == "show" && showType == "podcast"]{
    _id,
    title,
    slug,
    description,
    thumbnail,
    podcastFeedUrl
  },
  "recentEpisodes": *[_type == "episode"] | order(publishedAt desc)[0...8]{
    _id,
    title,
    youtubeVideoId,
    description,
    publishedAt,
    duration,
    thumbnail,
    show->{ title, slug }
  }
}`;

export const SHOW_QUERY = groq`
  *[_type == "show" && slug.current == $slug][0]{
    title,
    description,
    thumbnail,
    showType,
    youtubePlaylistId,
    podcastFeedUrl,
    seo,
    "episodes": *[_type == "episode" && show._ref == ^._id] | order(publishedAt desc){
      _id,
      title,
      youtubeVideoId,
      description,
      publishedAt,
      duration,
      thumbnail
    }
  }
`;

// =====================
// IMPACT PAGE QUERIES
// =====================

export const IMPACT_PAGE_QUERY = groq`{
  "settings": *[_type == "siteSettings"][0]{
    stats[]{
      label,
      value,
      numericValue,
      suffix
    }
  },
  "awards": *[_type == "award"] | order(year desc){
    _id,
    title,
    organization,
    year,
    description,
    logo,
    url
  },
  "partners": *[_type == "partner"] | order(tier asc){
    _id,
    name,
    logo,
    url,
    tier,
    description
  }
}`;

// =====================
// ABOUT PAGE QUERIES
// =====================

export const ABOUT_PAGE_QUERY = groq`{
  "settings": *[_type == "siteSettings"][0]{
    siteName,
    tagline,
    footerText
  },
  "team": *[_type == "teamMember"] | order(order asc){
    _id,
    name,
    role,
    image,
    bio,
    socialLinks
  }
}`;

// =====================
// SITE SETTINGS
// =====================

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]{
    siteName,
    tagline,
    socialLinks,
    contactEmail,
    contactPhone,
    whatsappNumber,
    footerText,
    announcementBar
  }
`;
