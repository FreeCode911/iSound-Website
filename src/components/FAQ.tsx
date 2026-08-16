"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is iSound free to use?",
    answer:
      "Yes! iSound is completely free to use with no premium tier. All features including autoplay, playlists, and filters are available to everyone.",
  },
  {
    question: "Does iSound support Spotify?",
    answer:
      "Single Spotify track URLs work via ISRC fallback. However, Spotify playlist and album URLs may have limited support depending on the Lavalink node configuration. YouTube and other sources work perfectly.",
  },
  {
    question: "How does autoplay work?",
    answer:
      "When your queue ends, iSound uses YouTube radio mixes to find related songs and automatically adds them. No Spotify Premium required. You can toggle it with /autoplay.",
  },
  {
    question: "Can I use playlists across servers?",
    answer:
      "Yes! Playlists are global — create a playlist in Server A and play it in Server B. Each user has their own playlists.",
  },
  {
    question: "What happens if the bot disconnects?",
    answer:
      "iSound has multi-node failover. If one Lavalink node goes down, your music automatically migrates to another node within 200ms.",
  },
  {
    question: "How do I set up DJ roles?",
    answer:
      "Run /set-djrole with a role. Users with that role can use restricted commands like skip, stop, and filters. Only administrators can set this.",
  },
  {
    question: "Does iSound store my data?",
    answer:
      "iSound stores guild settings (volume, DJ role, embed color) and user playlists in MongoDB. No message content is stored — only slash command data.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-gradient-surface">
      <div className="container-max max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-textMuted text-base sm:text-lg">
            Everything you need to know about iSound.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                className="border border-mid rounded-md bg-surface overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-ring"
                >
                  <span className="text-text font-medium text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-accent transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-5 pb-4 text-textMuted text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
