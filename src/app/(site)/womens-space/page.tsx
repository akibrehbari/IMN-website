import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { YOUTUBE_PLAYLISTS, WHATSAPP_LINK } from "@/lib/constants";
import { client } from "@/sanity/client";
import { STORIES_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import SanityImage from "@/components/shared/SanityImage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Women's Space",
  description:
    "Celebrating women of Gilgit-Baltistan & Chitral — empowering through stories, opportunities, and community support.",
};

// Fallback Stories of Resilience
const fallbackStories = [
  {
    _id: "f1",
    title: "From Homemaker to Entrepreneur",
    slug: { current: "women-digital-media" },
    excerpt: "How one woman transformed her kitchen skills into a thriving business serving the entire valley.",
    mainImage: null,
    localImage: "/images/thumbnails/Women suuuup.jpg",
    categories: [{ title: "Empowerment", slug: { current: "womens-space" } }],
  },
  {
    _id: "f2",
    title: "Teaching Tomorrow's Leaders",
    slug: { current: "women-teachers-chitral" },
    excerpt: "A dedicated teacher's journey to bring quality education to remote mountain villages.",
    mainImage: null,
    localImage: "/images/thumbnails/Children.jpeg",
    categories: [{ title: "Education", slug: { current: "womens-space" } }],
  },
  {
    _id: "f3",
    title: "Healthcare Hero of the Mountains",
    slug: { current: "gilgit-dr-saeeda-civil-judge" },
    excerpt: "Meet the nurse who treks hours through rugged terrain to provide healthcare to women in need.",
    mainImage: null,
    localImage: "/images/thumbnails/opportunity.png",
    categories: [{ title: "Healthcare", slug: { current: "womens-space" } }],
  },
  {
    _id: "f4",
    title: "First in Her Family to Graduate",
    slug: { current: "female-engineer-hunza" },
    excerpt: "Against all odds, she became the first woman in her village to earn a university degree.",
    mainImage: null,
    localImage: "/images/thumbnails/Normeen.jpeg",
    categories: [{ title: "Education", slug: { current: "womens-space" } }],
  },
];

type DisplayStory = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset?: { _ref: string }; alt?: string } | null;
  localImage?: string;
  categories?: { title: string; slug: { current: string } }[];
};

async function getStories(): Promise<DisplayStory[]> {
  try {
    const data = await client.fetch(STORIES_BY_CATEGORY_QUERY, { categorySlug: "womens-space" });
    if (data && data.length > 0) return data as DisplayStory[];
    return fallbackStories as DisplayStory[];
  } catch {
    return fallbackStories as DisplayStory[];
  }
}

// Video content — REAL YouTube links from IMN Women playlist
const videos = [
  { id: "1", title: "Lal Shehzadi — A Story of Resilience", thumbnail: "/images/thumbnails/Women Of Gilgit Baltistan.jpeg", youtubeId: "SLPxA_c1JA0" },
  { id: "2", title: "Nayab Ali — Transgender Rights", thumbnail: "/images/thumbnails/Women suuuup.jpg", youtubeId: "F59DMu1898w" },
  { id: "3", title: "Maliha Hussain — Women's Activism", thumbnail: "/images/thumbnails/Children.jpeg", youtubeId: "tmNL4lwUIzQ" },
  { id: "4", title: "Shaad Begum — Political Pioneer", thumbnail: "/images/thumbnails/opportunity.png", youtubeId: "zytGlLVC5VI" },
];

// Opportunities
const opportunities = [
  {
    id: "1",
    title: "Digital Skills Training Program",
    type: "Training",
    description: "Free 3-month training in digital marketing, graphic design, and web development. Open to all women aged 18-35.",
  },
  {
    id: "2",
    title: "Women Entrepreneurship Grant",
    type: "Grant",
    description: "Grants up to PKR 500,000 for women-led startups in handicrafts, agriculture, and technology sectors.",
  },
  {
    id: "3",
    title: "Scholarship for Higher Education",
    type: "Scholarship",
    description: "Full scholarships for undergraduate studies at leading universities in Pakistan. Priority for STEM fields.",
  },
];

// Safety helplines — updated per client feedback
const helplines = [
  { name: "Emergency Helpline", number: "15", description: "Police emergency services for immediate assistance." },
  { name: "Ambulance Services", number: "1122", description: "Medical emergency and ambulance services." },
  { name: "Gilgit Women Police Station", number: "05811-930101", description: "Dedicated women police station for Gilgit region." },
];

export default async function WomensSpacePage() {
  const stories = await getStories();
  return (
    <div className="pt-0">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/thumbnails/Women Of Gilgit Baltistan.jpeg"
            alt="Women's Space"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 container-wide py-32 lg:py-0">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="h-4 w-4 text-imn-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-sm font-medium text-white">Women&apos;s Space</span>
            </span>

            <h1 className="font-sans text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Celebrating Women of{" "}
              <span className="text-imn-red">Gilgit-Baltistan</span> & Chitral
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 font-light mb-4">
              Empowering women everywhere
            </p>

            <p className="text-base lg:text-lg text-white/80 max-w-lg leading-relaxed mb-8">
              Empowering women through stories of resilience, opportunities for growth, and a community that celebrates achievements.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#stories"
                className="inline-flex items-center gap-2 px-8 py-4 bg-imn-red text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors"
              >
                Stories of Resilience
              </a>
              <a
                href="#videos"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STORIES OF RESILIENCE ===== */}
      <section id="stories" className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-4">
            Stories of Resilience
          </h2>
          <p className="text-imn-gray-500 text-base mb-12 max-w-2xl">
            Stories of strength and resilience — women entrepreneurs, educators, healthcare workers, and leaders building a better future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story) => (
              <Link
                key={story._id}
                href={`/stories/${story.slug.current}`}
                className="group relative overflow-hidden rounded-sm bg-imn-gray-100 aspect-[4/3] block"
              >
                {story.mainImage?.asset?._ref ? (
                  <SanityImage
                    image={story.mainImage}
                    alt={story.mainImage.alt || story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-imn-dark to-imn-gray-800" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {story.categories?.[0] && (
                    <span className="inline-block bg-imn-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-3">
                      {story.categories[0].title}
                    </span>
                  )}
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-white/90 transition-colors">{story.title}</h3>
                  {story.excerpt && <p className="text-white/70 text-sm line-clamp-2">{story.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEOS ===== */}
      <section id="videos" className="py-20 md:py-32 bg-imn-red">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white leading-[0.95]">
                Watch Our Videos
              </h2>
              <p className="text-white/80 text-base mt-3 max-w-lg">
                Inspiring videos of women who have overcome challenges and achieved remarkable success.
              </p>
            </div>
            <a
              href={YOUTUBE_PLAYLISTS.women}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white text-imn-dark text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              All Videos on YouTube
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video rounded-sm overflow-hidden bg-imn-gray-800">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-imn-red ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-sans text-sm font-bold uppercase text-white mt-3 group-hover:text-white/80 transition-colors">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <a href={YOUTUBE_PLAYLISTS.women} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-imn-dark text-sm font-bold uppercase tracking-wider rounded-sm">
              All Videos on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ===== OPPORTUNITIES ===== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-4">
            Opportunities
          </h2>
          <p className="text-imn-gray-500 text-base mb-12 max-w-2xl">
            Discover opportunities for education, employment, and entrepreneurship designed to empower women in our region.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.id} className="border border-imn-gray-200 rounded-sm p-6 md:p-8 hover:border-imn-red/30 transition-colors">
                <span className="inline-block bg-imn-red/10 text-imn-red text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-4">
                  {opp.type}
                </span>
                <h3 className="font-sans text-lg font-bold text-imn-dark mb-3">{opp.title}</h3>
                <p className="text-imn-gray-500 text-sm leading-relaxed">{opp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAFETY & SUPPORT ===== */}
      <section className="py-20 md:py-32 bg-imn-red">
        <div className="container-wide">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-4">
            Safety & Support
          </h2>
          <p className="text-white/80 text-base mb-12 max-w-2xl">
            Your safety matters. Reach out to these helplines for immediate assistance, support, and guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {helplines.map((helpline, i) => (
              <div key={i} className="bg-white/10 rounded-sm p-6 md:p-8 border border-white/20">
                <div className="w-12 h-12 rounded-sm bg-white/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-sans text-lg font-bold text-white mb-1">{helpline.name}</h3>
                <p className="text-white text-2xl font-black mb-3">{helpline.number}</p>
                <p className="text-white/70 text-sm">{helpline.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-sm bg-white/10 border border-white/20">
            <p className="text-white/90 text-sm">
              <strong className="text-white">In case of immediate danger:</strong> Please call the Police Emergency (15) or Gilgit Women Police Station 05811-930101. For medical emergencies, dial 1122 for ambulance services.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY CTA ===== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide text-center">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-4">
            Join Our Community
          </h2>
          <p className="text-imn-gray-500 text-base mb-10 max-w-lg mx-auto">
            Be part of a supportive community of women empowering each other. Join our women&apos;s space WhatsApp group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-imn-red text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-imn-red-dark transition-colors"
            >
              Share a Story
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-imn-dark text-imn-dark text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-imn-dark hover:text-white transition-colors"
            >
              Share an Opportunity
            </Link>
          </div>
          <div className="mt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[#20BD5A] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join Women&apos;s Space WhatsApp Group
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
