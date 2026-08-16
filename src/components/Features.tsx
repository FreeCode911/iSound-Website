"use client";

import { motion } from "framer-motion";
import {
  PlayCircle,
  ListMusic,
  Sparkles,
  Database,
  Headphones,
  Image as ImageIcon,
  Shield,
  SlidersHorizontal,
  Users,
  LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "play-circle": PlayCircle,
  "list-music": ListMusic,
  sparkles: Sparkles,
  database: Database,
  headphones: Headphones,
  image: ImageIcon,
  shield: Shield,
  "sliders-horizontal": SlidersHorizontal,
  users: Users,
};

const features = [
  {
    icon: "play-circle",
    title: "Smart Playback",
    description:
      "Search by name or paste any URL. iSound supports YouTube, SoundCloud, Bandcamp, Twitch, Vimeo, and direct HTTP links with instant playback.",
    badge: "Core",
  },
  {
    icon: "list-music",
    title: "Queue Management",
    description:
      "Full queue control with move, remove, shuffle, loop (track or queue), and paginated view. Your music, your rules.",
    badge: "Core",
  },
  {
    icon: "sparkles",
    title: "Autoplay",
    description:
      "Never hit silence. When your queue ends, iSound automatically plays related songs using YouTube radio mixes — no Spotify Premium required.",
    badge: "Popular",
  },
  {
    icon: "database",
    title: "Personal Playlists",
    description:
      "Create, manage, and play playlists that follow you across servers. Up to 100 tracks per playlist with global access.",
    badge: "Core",
  },
  {
    icon: "headphones",
    title: "12 Audio Filters",
    description:
      "Bass Boost, Nightcore, Vaporwave, 8D rotation, Karaoke, Tremolo, Vibrato, Low Pass, Mono, and Speed control. Transform any track.",
    badge: "Premium Feel",
  },
  {
    icon: "image",
    title: "Now Playing Banner",
    description:
      "Beautiful canvas-generated 800x270 banners with album art, dominant color extraction, progress bar, and interactive controls.",
    badge: "Visual",
  },
  {
    icon: "shield",
    title: "Multi-Node Failover",
    description:
      "Multiple Lavalink nodes with circuit breaker protection. If one goes down, your music seamlessly migrates to a healthy node.",
    badge: "Reliability",
  },
  {
    icon: "sliders-horizontal",
    title: "Guild Settings",
    description:
      "Per-server customization: DJ roles, default volume, custom embed colors, announce channels, and autoplay toggle.",
    badge: "Customization",
  },
  {
    icon: "users",
    title: "Smart Voice Management",
    description:
      "Auto-pauses when you're alone, auto-resumes when someone joins, and leaves after 2 minutes of silence. No wasted resources.",
    badge: null,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding bg-gradient-surface"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-text mb-4">
            Everything Your Server Needs
          </h2>
          <p className="text-textMuted text-base sm:text-lg">
            From casual listening to full DJ control — iSound handles it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-surface border border-mid rounded-lg p-6 transition-shadow hover:shadow-glow"
              >
                {f.badge && (
                  <span className="absolute top-5 right-5 text-[10px] uppercase tracking-wider font-semibold text-accentDark bg-accent/15 border border-accent/30 rounded-full px-2.5 py-1">
                    {f.badge}
                  </span>
                )}
                <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={22} />
                </div>
                <h3 className="font-heading text-lg text-text mb-2 pr-16">
                  {f.title}
                </h3>
                <p className="text-textMuted text-sm leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
