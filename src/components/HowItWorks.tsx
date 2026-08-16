"use client";

import { motion } from "framer-motion";
import { UserPlus, Headphones, Music } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Invite iSound",
    description:
      "Click the invite button and add iSound to your Discord server in one click.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Join a Voice Channel",
    description: "Join any voice channel and run /play with a song name or URL.",
    icon: Headphones,
  },
  {
    number: "03",
    title: "Enjoy the Music",
    description:
      "iSound handles everything — playback, queue, filters, and even autoplay.",
    icon: Music,
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-surface">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-text mb-4">
            Get Started in Seconds
          </h2>
          <p className="text-textMuted text-base sm:text-lg">
            No setup required. Just invite and play.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center gap-4"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-surface border border-accent/40 flex items-center justify-center shadow-glow">
                  <Icon className="text-accent" size={26} />
                </div>
                <span className="font-mono text-xs text-textDim tracking-widest">
                  STEP {step.number}
                </span>
                <h3 className="font-heading text-lg text-text">
                  {step.title}
                </h3>
                <p className="text-textMuted text-sm max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
