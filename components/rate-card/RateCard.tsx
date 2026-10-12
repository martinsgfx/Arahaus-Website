"use client";

import { useState } from "react";
import PackagesAccordion from "@/components/rate-card/PackagesAccordion";
import { rateCards, tabs, type TabId } from "@/lib/rate-card";

export default function RateCard() {
  const [activeTab, setActiveTab] = useState<TabId>("small");
  const { rows, packages } = rateCards[activeTab];

  return (
    <div>
      {/* Tabs */}
      <div
        role="tablist"
        className="flex gap-5 overflow-x-auto border-b-2 border-ink pl-1.5 md:justify-end md:pr-2 md:pl-0"
      >
        {tabs.map(({ id, label }) => {
          const isActive = id === activeTab;

          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(id)}
              className={`h-[60px] shrink-0 px-[25px] whitespace-nowrap ${
                isActive
                  ? "border-x-2 border-t-2 border-ink bg-white font-semibold text-ink"
                  : "text-ink/50 hover:text-ink/80"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <p className="px-1.5 py-5 text-right text-rust italic md:px-6">
        Starts from
      </p>

      {/* Price table */}
      <ul>
        {rows.map((row, index) => (
          <li
            key={`${row.name}-${index}`}
            className="grid grid-cols-[1fr_auto] items-center gap-x-4 px-1.5 py-[21px] md:grid-cols-[330px_1fr_auto] md:gap-x-0 md:px-6"
          >
            <div className="max-w-[210px] md:contents">
              <h3 className="leading-[1.6] font-semibold">{row.name}</h3>
              <p className="leading-[1.6] text-ink/80 md:max-w-[380px]">
                {row.description}
              </p>
            </div>
            <p className="text-lg font-bold">{row.price}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <PackagesAccordion packages={packages} />
      </div>
    </div>
  );
}