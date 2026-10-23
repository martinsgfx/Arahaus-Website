import Link from "next/link";
import RateCardButton from "@/components/RateCardButton"

export default function Hero() {
  return (
    <section className="px-6 pt-32 pb-[73px] md:pt-[140px]">
      <div className="mx-auto flex max-w-[878px] flex-col items-center gap-[30px] text-center">
        <div className="flex flex-col items-center gap-5">
          <h1
            className="text-7xl font-mediu leading-[0.95] tracking-[-0.005em] text-black md:text-7xl"
            style={{  textShadow: "0 0 1px rgba(0,0,0,0.25)" }}
          >
            We design{" "}
            <span className="  bg-linear-to-r from-rust via-rust to-[#492006] bg-clip-text text-transparent">
              differently.
            </span>
            
          </h1>
          <p className="max-w-[544px] tracking-[-0.005em]">
            Design services for helping businesses grow, events shine, and
            families celebrate. Because everyone deserves{" "}
            <em className="font-bold">great</em> design.
          </p>
        </div>

        <RateCardButton />
      </div>
    </section>
  );
}