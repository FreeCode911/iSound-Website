"use client";

import { motion } from "framer-motion";
import {
  Server,
  Code,
  FileCode,
  Database,
  Network,
  Key,
  LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  server: Server,
  code: Code,
  "file-code": FileCode,
  database: Database,
  network: Network,
  key: Key,
};

const tech = [
  { name: "Lavalink v4", description: "High-performance audio sending node for Discord", icon: "server", category: "Audio Engine" },
  { name: "discord.js 14", description: "Most powerful Discord library for Node.js", icon: "code", category: "Discord Library" },
  { name: "TypeScript", description: "Type-safe, maintainable codebase", icon: "file-code", category: "Language" },
  { name: "MongoDB", description: "Flexible document database for playlists & settings", icon: "database", category: "Database" },
  { name: "Multi-Node", description: "Load-balanced with circuit breaker failover", icon: "network", category: "Infrastructure" },
  { name: "YouTube OAuth2", description: "Authenticated YouTube access for reliability", icon: "key", category: "Auth" },
];

export default function TechStack() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-text mb-4">
            Built for Performance
          </h2>
          <p className="text-textMuted text-base sm:text-lg">
            Powered by industry-leading technology for the best audio
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech.map((t, i) => {
            const Icon = icons[t.icon];
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
                className="flex items-start gap-4 bg-surface border border-mid rounded-md p-5"
              >
                <div className="w-11 h-11 shrink-0 rounded-md bg-accent/10 flex items-center justify-center">
                  <Icon className="text-accent" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-textDim font-semibold">
                    {t.category}
                  </span>
                  <h3 className="font-heading text-base text-text mt-1 mb-1">
                    {t.name}
                  </h3>
                  <p className="text-textMuted text-sm leading-snug">
                    {t.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
