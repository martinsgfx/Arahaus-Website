import type { Metadata } from "next";
import WorksGallery from "@/components/works/WorksGallery";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Selected works by Arahaus: branding, print, packaging and event design for businesses and families.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <main className="bg-white pt-28 pb-16 text-charcoal md:pt-36 md:pb-24">
      <div className="flex flex-col items-center text-center">
        <span className="-mb-5 text-2xl leading-[1.23] tracking-[-0.005em] text-rust/60">
          Arahaus’
        </span>
        <h1 className="text-6xl leading-[1.45] tracking-[-0.025em] md:text-[100px]">
          Works
        </h1>
      </div>

      <WorksGallery />
    </main>
  );
}