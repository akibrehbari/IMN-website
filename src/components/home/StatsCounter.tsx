"use client";

import AnimatedCounter from "@/components/shared/AnimatedCounter";
import AnimateIn from "@/components/shared/AnimateIn";
import { AnimateStagger, AnimateStaggerItem } from "@/components/shared/AnimateStagger";

interface Stat {
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
}

interface StatsCounterProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { label: "Followers", value: "1.5M+", numericValue: 1500000, suffix: "+" },
  { label: "Monthly Reach", value: "5M+", numericValue: 5000000, suffix: "+" },
  { label: "Videos Produced", value: "5K+", numericValue: 5000, suffix: "+" },
];

export default function StatsCounter({ stats }: StatsCounterProps) {
  const displayStats = stats && stats.length > 0 ? stats : defaultStats;

  return (
    <section className="bg-imn-red py-20 md:py-32">
      <div className="container-wide">
        <AnimateIn>
          <h2 className="text-center font-sans text-3xl md:text-display-sm lg:text-display font-black uppercase tracking-tight text-white mb-16">
            IMN in Numbers
          </h2>
        </AnimateIn>
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {displayStats.map((stat, index) => (
            <AnimateStaggerItem key={index}>
            <div
              className="bg-white rounded-sm p-6 md:p-8 text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-imn-dark mb-2">
                <AnimatedCounter
                  end={stat.numericValue}
                  suffix={stat.suffix || ""}
                  duration={2000}
                />
              </div>
              <p className="text-imn-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
