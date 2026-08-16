"use client";

import { motion } from "framer-motion";
import {
  Volume2,
  Zap,
  Cloud,
  RotateCw,
  Mic,
  Activity,
  Waves,
  Filter as FilterIcon,
  Circle,
  FastForward,
  RefreshCcw,
  LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "volume-2": Volume2,
  zap: Zap,
  cloud: Cloud,
  "rotate-cw": RotateCw,
  mic: Mic,
  activity: Activity,
  waves: Waves,
  filter: FilterIcon,
  circle: Circle,
  "fast-forward": FastForward,
  "refresh-ccw": RefreshCcw,
};

const items = [
  { name: "Bass Boost", description: "Punchy low-end that hits hard", icon: "volume-2", color: "#F0B52A" },
  { name: "Bass Boost High", description: "Maximum bass for bass heads", icon: "volume-2", color: "#FFD966" },
  { name: "Nightcore", description: "Faster tempo with pitched-up vocals", icon: "zap", color: "#ED4245" },
  { name: "Vaporwave", description: "Slow, dreamy, retro vibes", icon: "cloud", color: "#5865F2" },
  { name: "8D", description: "Spatial rotation that surrounds you", icon: "rotate-cw", color: "#57F287" },
  { name: "Karaoke", description: "Remove vocals for sing-alongs", icon: "mic", color: "#FEE75C" },
  { name: "Tremolo", description: "Rhythmic volume pulsing effect", icon: "activity", color: "#EB459E" },
  { name: "Vibrato", description: "Pitch wavering for warmth", icon: "waves", color: "#9B59B6" },
  { name: "Low Pass", description: "Smooth out harsh high frequencies", icon: "filter", color: "#1ABC9C" },
  { name: "Mono", description: "Center the audio to mono output", icon: "circle", color: "#95A5A6" },
  { name: "Speed 1.5x", description: "Play at 150% speed", icon: "fast-forward", color: "#E67E22" },
  { name: "Reset", description: "Clear all active filters", icon: "refresh-ccw", color: "#FFFFFF" },
];

export default function Filters() {
  return (
    <section id="filters" className="section-padding bg-surface">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-text mb-4">
            12 Audio Filters
          </h2>
          <p className="text-textMuted text-base sm:text-lg">
            Transform any track with studio-quality effects. Mix and match
            for your perfect sound.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-surfaceElevated border border-mid rounded-md p-5 flex flex-col items-center text-center gap-2 transition-shadow hover:shadow-glow"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-1"
                  style={{ backgroundColor: `${item.color}22` }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="text-text text-sm font-semibold">
                  {item.name}
                </h3>
                <p className="text-textDim text-xs leading-snug">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
