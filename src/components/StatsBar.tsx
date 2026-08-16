"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, SlidersHorizontal, Music, Server, LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  terminal: Terminal,
  sliders: SlidersHorizontal,
  music: Music,
  server: Server,
};

const stats = [
  {
    label: "Commands",
    value: "36",
    numeric: 36,
    icon: "terminal",
    description: "Slash commands for full control",
  },
  {
    label: "Audio Filters",
    value: "12",
    numeric: 12,
    icon: "sliders",
    description: "Transform your listening experience",
  },
  {
    label: "Sources",
    value: "6+",
    numeric: 6,
    suffix: "+",
    icon: "music",
    description: "YouTube, SoundCloud, Bandcamp, and more",
  },
  {
    label: "Node Uptime",
    value: "99.9%",
    numeric: 99.9,
    suffix: "%",
    icon: "server",
    description: "Multi-node failover for reliability",
  },
];

function CountUpValue({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(target * progress);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-surface">
      <div className="container-max py-10 hidden sm:block">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = icons[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-2 p-4"
              >
                <Icon className="text-accent mb-1" size={26} />
                <div className="font-heading text-3xl text-text">
                  <CountUpValue
                    target={stat.numeric}
                    suffix={stat.suffix ?? ""}
                    decimals={stat.numeric % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <div className="text-sm font-semibold text-accent">
                  {stat.label}
                </div>
                <div className="text-xs text-textDim">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="sm:hidden flex overflow-x-auto gap-4 px-6 py-6 snap-x">
        {stats.map((stat) => {
          const Icon = icons[stat.icon];
          return (
            <div
              key={stat.label}
              className="snap-start shrink-0 w-40 flex flex-col items-center text-center gap-1 bg-surfaceElevated rounded-md p-4"
            >
              <Icon className="text-accent mb-1" size={22} />
              <div className="font-heading text-2xl text-text">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-accent">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
