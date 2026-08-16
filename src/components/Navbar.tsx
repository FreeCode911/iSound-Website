"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Commands", href: "#commands" },
  { label: "Filters", href: "#filters" },
  { label: "FAQ", href: "#faq" },
];

const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1345227880271183903";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[72px] transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(10,5,0,0.85)" : "rgba(10,5,0,0.4)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav className="container-max h-full flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-heading text-accent text-xl tracking-wide focus-ring"
        >
          <Image
            src="/logo.png"
            alt="iSound logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          iSound
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-textMuted hover:text-accent transition-colors text-sm font-medium focus-ring"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primaryHover text-background font-semibold text-sm px-5 py-2.5 rounded-full transition-colors focus-ring"
          >
            Add to Discord
            <ExternalLink size={16} />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-accent focus-ring p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed top-[72px] right-0 bottom-0 w-full max-w-xs bg-surface border-l border-mid p-6 flex flex-col gap-6"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-text text-lg font-medium focus-ring"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-background font-semibold px-5 py-3 rounded-full mt-2"
            >
              Add to Discord
              <ExternalLink size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
