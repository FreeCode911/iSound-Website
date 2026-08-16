"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Star, Music2 } from "lucide-react";

const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1345227880271183903";
const VOTE_URL = "https://top.gg/bot/1345227880271183903";

const NOTES = [
  { left: "8%", top: "20%", size: 22, delay: 0, duration: 7 },
  { left: "18%", top: "65%", size: 16, delay: 1.2, duration: 6 },
  { left: "88%", top: "15%", size: 20, delay: 0.6, duration: 8 },
  { left: "80%", top: "70%", size: 14, delay: 1.8, duration: 6.5 },
  { left: "50%", top: "10%", size: 12, delay: 0.9, duration: 5.5 },
  { left: "60%", top: "80%", size: 18, delay: 0.3, duration: 7.5 },
];

const BARS = Array.from({ length: 24 }, (_, i) => i);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-gradient-hero pt-[120px] pb-[80px]"
    >
      {/* Ambient glow */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </motion.div>

      {/* Floating notes */}
      {NOTES.map((n, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute text-accent/40"
          style={{ left: n.left, top: n.top }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: n.duration,
            delay: n.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Music2 size={n.size} />
        </motion.div>
      ))}

      <div className="container-max relative z-10 flex flex-col items-center text-center gap-6">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="contents">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 border border-accent/50 text-accent text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-wider"
        >
          Powered by Lavalink v4
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl text-text tracking-wide"
        >
          iSound
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-accent font-medium"
        >
          Your Server&apos;s Personal DJ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl text-textMuted text-base sm:text-lg"
        >
          Play, queue, and discover music with zero lag. Built with Lavalink
          v4 for low-latency, high-quality audio across multiple nodes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primaryHover text-background font-semibold px-7 py-3.5 rounded-full transition-colors shadow-glow focus-ring animate-glowPulse"
          >
            Add to Discord
            <ExternalLink size={18} />
          </a>
          <a
            href={VOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-accent text-accent hover:bg-accent/10 font-semibold px-7 py-3.5 rounded-full transition-colors focus-ring"
          >
            Vote on Top.gg
            <Star size={18} />
          </a>
        </motion.div>

        {/* Waveform visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex items-end gap-1 h-16"
        >
          {BARS.map((i) => (
            <motion.span
              key={i}
              className="w-1.5 rounded-full bg-gradient-accent"
              animate={{ height: ["20%", "100%", "35%", "80%", "20%"] }}
              transition={{
                duration: 1.8 + (i % 5) * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05,
              }}
            />
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
