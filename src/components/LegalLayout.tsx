import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-[120px] pb-24">
        <div className="container-max max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-textMuted hover:text-accent transition-colors text-sm mb-8 focus-ring"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <h1 className="font-heading text-3xl sm:text-4xl text-text mb-3">
            {title}
          </h1>
          <p className="text-textDim text-sm mb-12">
            Last updated: {lastUpdated}
          </p>

          <div className="legal-prose flex flex-col gap-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
