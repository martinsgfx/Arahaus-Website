import type { Metadata } from "next";
import RateCard from "@/components/rate-card/RateCard";
import PrintingServices from "@/components/rate-card/PrintingServices";

export const metadata: Metadata = {
  title: "Rate Card",
  description:
    "Arahaus services pricelist: logo and brand design, print materials, social media graphics and packages for small businesses, large businesses and international clients.",
  alternates: { canonical: "/rate-card" },
};

export default function RateCardPage() {
  return (
    <main className="bg-white px-[14px] pt-28 pb-12 text-charcoal md:px-16 md:pt-32 md:pb-[50px]">
      <div className="mx-auto max-w-[1152px]">
        <div className="flex flex-col items-center text-center">
          <span className="-mb-1 text-2xl leading-[1.23] tracking-[-0.005em] text-rust/60">
            Arahaus’
          </span>
          <h1 className="text-5xl leading-[1.1] tracking-[-0.025em] md:text-[100px] md:leading-[1.45]">
            Services Pricelist
          </h1>
        </div>

        <div className="mt-12 md:mt-[120px]">
          <RateCard />
        </div>

        <PrintingServices />
      </div>
    </main>
  );
}