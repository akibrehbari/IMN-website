import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/client";
import { IMPACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/image";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "IMN's impact and reach — awards, recognitions, partnerships, and the numbers behind our journalism.",
};

export const revalidate = 60;

const defaultStats = [
  { label: "Followers", numericValue: 1500000, suffix: "+" },
  { label: "Monthly Reach", numericValue: 5000000, suffix: "+" },
  { label: "Videos Produced", numericValue: 5000, suffix: "+" },
];

const defaultAwards = [
  { _id: "1", title: "Best Digital News Platform", organization: "Pakistan Digital Awards", year: 2024 },
  { _id: "2", title: "Excellence in Video Journalism", organization: "South Asian Media Forum", year: 2023 },
];

const defaultPartners = [
  { _id: "1", name: "UNDP Pakistan", tier: "flagship" },
  { _id: "2", name: "British Council", tier: "flagship" },
  { _id: "3", name: "UNESCO", tier: "collaborator" },
  { _id: "4", name: "WWF Pakistan", tier: "collaborator" },
];

async function getImpactData() {
  try {
    return await client.fetch(IMPACT_PAGE_QUERY);
  } catch (error) {
    console.error("Error fetching impact data:", error);
    return null;
  }
}

export default async function ImpactPage() {
  const data = await getImpactData();

  const stats = defaultStats;
  const awards = data?.awards && data.awards.length > 0 ? data.awards : defaultAwards;
  const partners = data?.partners && data.partners.length > 0 ? data.partners : defaultPartners;

  return (
    <div className="pt-0">
      {/* Hero Banner */}
      <section className="bg-imn-red pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide">
          <h1 className="font-sans text-display-sm md:text-display lg:text-display-lg font-black uppercase tracking-tight text-white mb-4">
            Our Impact
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            At IMN, we measure our success by the stories we tell and the
            communities we empower. Here&apos;s a look at our journey so far.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-wide">
          <h2 className="text-center font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-16">
            IMN in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat: { label: string; numericValue: number; suffix?: string }, i: number) => (
              <div key={i} className="bg-imn-red rounded-sm p-6 md:p-8 text-center">
                <div className="text-3xl md:text-5xl font-black text-white mb-2">
                  <AnimatedCounter end={stat.numericValue} suffix={stat.suffix || ""} duration={2000} />
                </div>
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-imn-red py-20 md:py-32">
        <div className="container-wide">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-4">
            Awards & Recognitions
          </h2>
          <p className="text-white/80 text-base mb-12">Recognition for impactful journalism</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award: { _id: string; title: string; organization: string; year: number; description?: string; logo?: { asset?: { _ref: string } }; url?: string }) => (
              <div
                key={award._id}
                className="flex items-start gap-4 p-6 rounded-sm bg-white"
              >
                <div className="w-12 h-12 rounded-sm bg-imn-red/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {award.logo?.asset ? (
                    <img src={urlFor(award.logo as Parameters<typeof urlFor>[0]).width(48).height(48).url()} alt={award.title} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-6 h-6 text-imn-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-bold uppercase text-sm text-imn-dark">{award.title}</h3>
                  <p className="text-imn-gray-500 text-sm mt-1">
                    {award.organization} &middot; {award.year}
                  </p>
                  {award.description && (
                    <p className="text-imn-gray-400 text-sm mt-2">{award.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-wide">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-4">
            Our Partners
          </h2>
          <p className="text-imn-gray-500 text-base mb-12">Organizations we collaborate with to create impact</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((partner: { _id: string; name: string; tier?: string; logo?: { asset?: { _ref: string } }; url?: string; description?: string }) => (
              <div
                key={partner._id}
                className="flex flex-col items-center p-6 rounded-sm border border-imn-gray-100 bg-white text-center"
              >
                <div className="w-16 h-16 rounded-sm bg-imn-gray-100 flex items-center justify-center mb-3 overflow-hidden">
                  {partner.logo?.asset ? (
                    <img src={urlFor(partner.logo as Parameters<typeof urlFor>[0]).width(64).height(64).url()} alt={partner.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-imn-gray-400 text-xs font-bold uppercase">
                      {partner.name.split(" ").map((w: string) => w[0]).join("")}
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold uppercase text-imn-dark">{partner.name}</h4>
                {partner.tier && <span className="text-[10px] text-imn-gray-400 mt-1 uppercase tracking-wider font-bold">{partner.tier}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Collaborate? CTA */}
      <section className="bg-imn-red py-20 md:py-32">
        <div className="container-wide text-center">
          <h2 className="font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-white mb-4">
            Want to Collaborate?
          </h2>
          <p className="text-white/80 text-base mb-10 max-w-lg mx-auto">
            We&apos;re always looking for partners, contributors, and organizations who share our mission of amplifying untold stories from Pakistan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-imn-dark text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
