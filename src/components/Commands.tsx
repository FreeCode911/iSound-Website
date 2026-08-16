"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  ListMusic,
  Settings,
  Info,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  music: Music,
  "list-music": ListMusic,
  settings: Settings,
  info: Info,
};

type Command = {
  name: string;
  description: string;
  options?: string;
  badge?: string;
  visibility?: string;
  permission?: string;
};

type Category = {
  name: string;
  icon: string;
  count: number;
  commands: Command[];
};

const categories: Category[] = [
  {
    name: "Music",
    icon: "music",
    count: 18,
    commands: [
      { name: "/play", description: "Play a song or playlist from URL or search", options: "query (required)", badge: "essential" },
      { name: "/skip", description: "Skip the current song" },
      { name: "/stop", description: "Stop playback and clear the queue" },
      { name: "/pause", description: "Pause or resume playback" },
      { name: "/queue", description: "View the current queue with pagination" },
      { name: "/remove", description: "Remove a track from queue by position", options: "position (required)" },
      { name: "/move", description: "Move a track to a new position", options: "from, to (required)" },
      { name: "/shuffle", description: "Shuffle the queue randomly" },
      { name: "/loop", description: "Set loop mode: Off, Track, or Queue", options: "mode (required)" },
      { name: "/volume", description: "Set player volume (0-100)", options: "level (required)" },
      { name: "/seek", description: "Seek to a position in the track", options: "position (e.g. 1:30, 90)" },
      { name: "/filters", description: "Apply an audio filter", options: "filter (autocomplete)", badge: "fun" },
      { name: "/lyrics", description: "Get lyrics for the current song" },
      { name: "/nowplaying", description: "Show current track info with banner" },
      { name: "/grab", description: "Save current song to your DMs", visibility: "ephemeral" },
      { name: "/savequeue", description: "Save entire queue to your DMs", visibility: "ephemeral" },
      { name: "/clear", description: "Clear all tracks from the queue" },
      { name: "/join", description: "Join or move to your voice channel", visibility: "ephemeral" },
    ],
  },
  {
    name: "Playlists",
    icon: "list-music",
    count: 8,
    commands: [
      { name: "/pl-create", description: "Create a new playlist", options: "name (required)" },
      { name: "/pl-delete", description: "Delete a playlist", options: "name (autocomplete)" },
      { name: "/pl-add", description: "Add a song or YouTube playlist to a playlist", options: "playlist, query (required)", badge: "popular" },
      { name: "/pl-remove", description: "Remove a track from a playlist with interactive buttons", options: "playlist (autocomplete)" },
      { name: "/pl-play", description: "Play a playlist", options: "name (autocomplete)" },
      { name: "/pl-list", description: "List all your playlists", visibility: "ephemeral" },
      { name: "/pl-shuffle", description: "Shuffle and play a playlist", options: "name (autocomplete)" },
      { name: "/pl-info", description: "Show playlist details and track list", options: "name (autocomplete)", visibility: "ephemeral" },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    count: 4,
    commands: [
      { name: "/set-djrole", description: "Set the DJ role for music commands", options: "role (required)", permission: "Administrator" },
      { name: "/set-volume", description: "Set default volume for the server", options: "level (0-100)", permission: "Administrator" },
      { name: "/set-announce", description: "Set the announcement channel", options: "channel (required)", permission: "Administrator" },
      { name: "/autoplay", description: "Toggle autoplay on or off", options: "enabled (boolean)", badge: "popular" },
    ],
  },
  {
    name: "Utility",
    icon: "info",
    count: 5,
    commands: [
      { name: "/about", description: "Show bot info, stats, and node status" },
      { name: "/ping", description: "Show latency and API response time", visibility: "ephemeral" },
      { name: "/help", description: "Show all available commands" },
      { name: "/reload-commands", description: "Reload slash commands (owner only)", permission: "Owner", visibility: "ephemeral" },
      { name: "/report-bug", description: "Report a bug with description and optional screenshot", options: "description (required), image (optional)", visibility: "ephemeral" },
    ],
  },
];

function CommandCard({ cmd }: { cmd: Command }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-surfaceElevated border border-mid rounded-md p-4 transition-shadow hover:shadow-glow"
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <code className="font-mono text-accent text-sm">{cmd.name}</code>
        {cmd.badge && (
          <span className="text-[10px] uppercase tracking-wider font-semibold text-accentDark bg-accent/15 border border-accent/30 rounded-full px-2 py-0.5 shrink-0">
            {cmd.badge}
          </span>
        )}
      </div>
      <p className="text-textMuted text-sm leading-snug">{cmd.description}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-textDim">
        {cmd.options && <span>Options: {cmd.options}</span>}
        {cmd.permission && <span>Requires: {cmd.permission}</span>}
        {cmd.visibility && <span className="italic">{cmd.visibility}</span>}
      </div>
    </motion.div>
  );
}

export default function Commands() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  return (
    <section id="commands" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-text mb-4">
            36 Slash Commands
          </h2>
          <p className="text-textMuted text-base sm:text-lg">
            Organized into four categories. Every command works instantly
            with no prefix needed.
          </p>
        </motion.div>

        {/* Tabs - desktop/tablet */}
        <div className="hidden sm:block">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat, i) => {
              const Icon = icons[cat.icon];
              const isActive = active === i;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors focus-ring ${
                    isActive
                      ? "bg-primary text-background"
                      : "bg-surface text-textMuted hover:text-accent border border-mid"
                  }`}
                >
                  <Icon size={16} />
                  {cat.name}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-background/20"
                        : "bg-mid text-textDim"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {categories[active].commands.map((cmd) => (
                <CommandCard key={cmd.name} cmd={cmd} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Accordion - mobile */}
        <div className="sm:hidden flex flex-col gap-3">
          {categories.map((cat, i) => {
            const Icon = icons[cat.icon];
            const isOpen = openMobile === i;
            return (
              <div
                key={cat.name}
                className="border border-mid rounded-md overflow-hidden bg-surface"
              >
                <button
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3.5 focus-ring"
                >
                  <span className="flex items-center gap-2 text-text font-semibold text-sm">
                    <Icon size={16} className="text-accent" />
                    {cat.name}
                    <span className="text-xs text-textDim">
                      ({cat.count})
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-accent transition-transform ${
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
                      className="px-4 pb-4 flex flex-col gap-3"
                    >
                      {cat.commands.map((cmd) => (
                        <CommandCard key={cmd.name} cmd={cmd} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
