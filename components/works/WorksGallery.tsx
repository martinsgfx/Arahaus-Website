"use client";

import { useState } from "react";
import FeedRow from "./FeedRow";
import FullCard from "./FullCard";
import { projects } from "@/lib/works";

type View = "feed" | "full";

const views: { id: View; label: string }[] = [
  { id: "feed", label: "Feed" },
  { id: "full", label: "Full" },
];

export default function WorksGallery() {
  const [view, setView] = useState<View>("feed");
  const count = String(projects.length).padStart(2, "0");

  return (
    <section>
      <div className="mt-16 flex items-center justify-center px-4 md:justify-between md:px-10">
        <h2 className="text-2xl tracking-[-0.02em] md:text-[32px]">
          Selected Works
          <sup className="ml-1 text-xs text-muted md:text-sm">({count})</sup>
        </h2>

        <div className="hidden gap-6 text-[32px] tracking-[-0.02em] md:flex">
          {views.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={view === id}
              onClick={() => setView(id)}
              className={`transition-colors ${
                view === id ? "text-ink" : "text-ink/40 hover:text-ink/70"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Phones: always the full cards */}
      <div className="mt-10 flex flex-col gap-5 px-3 md:hidden">
        {projects.map((project) => (
          <FullCard key={project.slug} project={project} />
        ))}
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