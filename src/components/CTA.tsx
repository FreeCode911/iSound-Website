"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1345227880271183903";
const VOTE_URL = "https://top.gg/bot/1345227880271183903";

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container-max relative z-10 flex flex-col items-center text-center gap-5"
      >
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-text">
          Ready to Upgrade Your Server?
        </h2>
        <p className="text-textMuted text-base sm:text-lg max-w-xl">
          Join thousands of servers already using iSound for their music.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primaryHover text-background font-semibold text-lg px-8 py-4 rounded-full transition-colors shadow-glowStrong focus-ring animate-glowPulse"
          >
            Add iSound to Discord
            <ExternalLink size={20} />
          </a>
          <a
            href={VOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-accent text-accent hover:bg-accent/10 font-semibold text-lg px-8 py-4 rounded-full transition-colors focus-ring"
          >
            Vote on Top.gg
            <Star size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
