"use client";

import { MonitorPlay, Music4, Radio, Video, Link2, Disc3 } from "lucide-react";

const sources = [
  { name: "YouTube", icon: MonitorPlay },
  { name: "SoundCloud", icon: Music4 },
  { name: "Bandcamp", icon: Disc3 },
  { name: "Twitch", icon: Radio },
  { name: "Vimeo", icon: Video },
  { name: "Direct HTTP", icon: Link2 },
];

// Duplicate the list so the loop is seamless (translate -50% wraps perfectly)
const loop = [...sources, ...sources];

export default function Marquee() {
  return (
    <section
      aria-label="Supported music sources"
      className="relative bg-surface border-y border-mid py-6 overflow-hidden"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-surface to-transparent" />

      <div className="marquee-track flex items-center gap-16 w-max">
        {loop.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={`${s.name}-${i}`}
              className="flex items-center gap-3 shrink-0 text-textMuted"
            >
              <Icon size={22} className="text-accent/70" />
              <span className="font-medium text-sm tracking-wide whitespace-nowrap">
                {s.name}
              </span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
