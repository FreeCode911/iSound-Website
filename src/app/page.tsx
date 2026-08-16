import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import Commands from "@/components/Commands";
import Filters from "@/components/Filters";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Architecture from "@/components/Architecture";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <StatsBar />
        <Features />
        <Commands />
        <Filters />
        <HowItWorks />
        <TechStack />
        <Architecture />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
