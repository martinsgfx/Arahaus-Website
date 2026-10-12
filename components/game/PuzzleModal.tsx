"use client";

import { useEffect, useRef } from "react";
import PuzzleBuilder from "@/components/game/puzzle/PuzzleBuilder";
import type { PuzzleTheme } from "@/lib/puzzle";

type PuzzleModalProps = {
  puzzle: PuzzleTheme;
  onClose: () => void;
};

export default function PuzzleModal({ puzzle, onClose }: PuzzleModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // While open: stop the page behind from scrolling, and move focus into the
  // popup. When it closes, give focus back to whatever opened it.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Puzzle"
      tabIndex={-1}
      className="fixed inset-0 z-[60] overflow-y-auto bg-black/50 outline-none backdrop-blur-sm"
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <PuzzleBuilder puzzle={puzzle} onClose={onClose} />
      </div>
    </div>
  );
}