import { client } from "@/sanity/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import VideoHero from "@/components/home/VideoHero";
import GenZSpot from "@/components/home/GenZSpot";
import WatchOurContent from "@/components/home/WatchOurContent";
import StatsCounter from "@/components/home/StatsCounter";
import PressTestimonials from "@/components/home/PressTestimonials";
import PartnerLogos from "@/components/home/PartnerLogos";
import LetsTalk from "@/components/home/LetsTalk";

export const revalidate = 60;

async function getHomeData() {
  try {
    return await client.fetch(HOME_QUERY);
  } catch (error) {
    console.error("Error fetching home data:", error);
    return null;
  }
}

export default async function HomePage() {
  const data = await getHomeData();

  return (
    <>
      {/* 1. Cover Video like NowThis */}
      <VideoHero
        headline={data?.settings?.heroHeadline || "From Grassroots to Global"}
        subheadline={
          data?.settings?.heroSubheadline ||
          "Ibex Media Network is one of Pakistan\u2019s largest digital-first news platforms. We take pride in spotlighting stories that are often untold in today\u2019s mainstream media landscape."
        }
        youtubeId="SLPxA_c1JA0"
      />

      {/* 2. GEN Z Spot */}
      <GenZSpot />

      {/* 3. Watch Our Content (video section → YouTube) */}
      <WatchOurContent />

      {/* 4. IMN in Numbers — hardcoded per client request */}
      <StatsCounter />

      {/* 5. What the World Is Saying (Press) */}
      <PressTestimonials />

      {/* 6. Partners */}
      <PartnerLogos partners={data?.partners} />

      {/* 7. Let's Talk */}
      <LetsTalk />
    </>
  );
}
