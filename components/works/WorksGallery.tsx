"use client";

import { useState } from "react";
import FeedRow from "@/components/works/FeedRow";
import FullCard from "@/components/works/FullCard";
import MobileGrid from "@/components/works/MobileGrid";
import { projects } from "@/lib/works";

type View = "feed" | "full";

const tabClass = (active: boolean) =>
  `transition-colors ${active ? "text-ink" : "text-ink/40 hover:text-ink/70"}`;

export default function WorksGallery() {
  const [view, setView] = useState<View>("feed");
  const count = String(projects.length).padStart(2, "0");

  return (
    <section>
      <div className="mt-16 flex flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-10">
        <h2 className="text-2xl tracking-[-0.02em] md:text-[32px]">
          Selected Works
          <sup className="ml-1 text-xs text-muted md:text-sm">({count})</sup>
        </h2>

        <div className="flex gap-20 text-2xl tracking-[-0.02em] md:gap-6 md:text-[32px]">
          <button
            type="button"
            aria-pressed={view === "feed"}
            onClick={() => setView("feed")}
            className={tabClass(view === "feed")}
          >
            <span className="md:hidden">Grid</span>
            <span className="hidden md:inline">Feed</span>
          </button>
          <button
            type="button"
            aria-pressed={view === "full"}
            onClick={() => setView("full")}
            className={tabClass(view === "full")}
          >
            Full
          </button>
        </div>
      </div>

      {/* Phones: the grid or the full cards, depending on the tab */}
      <div className="mt-10 md:hidden">
        {view === "feed" ? (
          <MobileGrid projects={projects} />
        ) : (
          <div className="flex flex-col gap-5 px-3">
            {projects.map((project) => (
              <FullCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>

      {/* Web: feed or full, depending on the tab */}
      <div className="mt-16 hidden md:block">
        {view === "feed" ? (
          projects.map((project) => (
            <FeedRow key={project.slug} project={project} />
          ))
        ) : (
          <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-10">
            {projects.map((project) => (
              <FullCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}