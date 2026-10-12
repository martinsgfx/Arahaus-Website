"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { RatePackage } from "@/lib/rate-card";

export default function PackagesAccordion({
  packages,
}: {
  packages: RatePackage[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-2 border-rust bg-white">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-[22px] py-[26px] text-left font-semibold tracking-[-0.01em] text-ink/80 uppercase md:px-7"
      >
        Packages
        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Grid rows animate from 0fr to 1fr, so the panel opens smoothly */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="border-t border-mist px-[18px] md:px-7">
            {packages.map((pkg, index) => (
              <li
                key={`${pkg.name}-${index}`}
                className="grid grid-cols-[1fr_auto] gap-y-8 py-6 md:grid-cols-[340px_1fr_auto] md:gap-y-0"
              >
                <div className="md:col-start-1 md:row-start-1">
                  <h3 className="font-semibold">{pkg.name}</h3>
                  <span className="mt-2 inline-block border border-mist px-2 py-[3px] text-xs">
                    {pkg.tag}
                  </span>
                </div>

                <p className="text-lg font-bold md:col-start-3 md:row-start-1">
                  {pkg.price}
                </p>

                <ul className="col-span-2 w-[64%] list-disc pl-[14px] leading-[1.6] md:col-span-1 md:col-start-2 md:row-start-1 md:w-auto">
                  {pkg.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}