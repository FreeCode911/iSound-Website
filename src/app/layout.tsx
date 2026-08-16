import type { Metadata, Viewport } from "next";
import "@fontsource/audiowide";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0500",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isound.bot"),
  title: "iSound — Discord Music Bot | Free, Fast, Feature-Rich",
  description:
    "iSound is a free Discord music bot powered by Lavalink v4. Play music from YouTube, SoundCloud, and more with 12 audio filters, playlists, and multi-node failover.",
  keywords: [
    "discord music bot",
    "lavalink bot",
    "free music bot",
    "discord bot",
    "music bot 2024",
    "youtube discord bot",
    "playlist bot discord",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "iSound — Discord Music Bot | Free, Fast, Feature-Rich",
    description:
      "iSound is a free Discord music bot powered by Lavalink v4. Play music from YouTube, SoundCloud, and more with 12 audio filters, playlists, and multi-node failover.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
