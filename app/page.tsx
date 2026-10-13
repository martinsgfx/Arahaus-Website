import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HeroGrid from "@/components/HeroGrid";
import About from "@/components/About";
import Services from "@/components/Services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroGrid />
      <About />
      <Services />
    </main>
  );
}