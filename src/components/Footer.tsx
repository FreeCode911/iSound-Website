import Image from "next/image";
import { MessageCircle, Star } from "lucide-react";

const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1345227880271183903";
const VOTE_URL = "https://top.gg/bot/1345227880271183903";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Invite Bot", url: INVITE_URL },
      { label: "Vote on Top.gg", url: VOTE_URL },
      { label: "Commands List", href: "#commands" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Audio Filters", href: "#filters" },
      { label: "Playlists", href: "#features" },
      { label: "Autoplay", href: "#features" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#050200" }} className="pt-16 pb-8">
      <div className="container-max grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div className="col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="iSound logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="font-heading text-accent text-xl">iSound</span>
          </div>
          <p className="text-textDim text-sm mt-3 max-w-[220px]">
            Your server&apos;s personal DJ, powered by Lavalink v4.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="w-9 h-9 rounded-full border border-mid flex items-center justify-center text-textMuted hover:text-accent hover:border-accent transition-colors focus-ring"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href={VOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Top.gg"
              className="w-9 h-9 rounded-full border border-mid flex items-center justify-center text-textMuted hover:text-accent hover:border-accent transition-colors focus-ring"
            >
              <Star size={16} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-text text-sm font-semibold mb-4">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={"url" in link ? link.url : link.href}
                    target={"url" in link ? "_blank" : undefined}
                    rel={"url" in link ? "noopener noreferrer" : undefined}
                    className="text-textDim hover:text-accent transition-colors text-sm focus-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-max border-t border-mid mt-12 pt-6">
        <p className="text-textDim text-xs text-center">
          © 2024 iSound. Built with passion by legendyt4k.
        </p>
      </div>
    </footer>
  );
}
