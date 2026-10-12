"use client";

import { useCallback, useState } from "react";
import PuzzleLetter from "@/components/game/PuzzleLetter";
import PuzzleModal from "@/components/game/PuzzleModal";
import { puzzles, type PuzzleId } from "@/lib/puzzle";

export default function GameStage() {
  const [activePuzzle, setActivePuzzle] = useState<PuzzleId | null>(null);

  const closePuzzle = useCallback(() => setActivePuzzle(null), []);

  function select(id: PuzzleId) {
    setActivePuzzle(id);
  }

  return (
    <section className="relative min-h-[190vw] overflow-hidden bg-white pt-[78vw] pb-16 text-[13.8vw] leading-[0.87] text-charcoal md:min-h-[70vw] md:pt-[26vw] md:text-[10.7vw]">
      <h1 className="sr-only">Solve the puzzle</h1>

      {/* The whole headline sits in one centered box */}
      <div className="mx-auto w-fit">
        {/* Line 1: SOLVE THE */}
        <div className="flex items-baseline">
          <span aria-hidden="true">S</span>

          <PuzzleLetter
            label="Open puzzle 1"
            shapeSrc="/game/letter-o.svg"
            filledSrc="/game/letter-o-filled.svg"
            pieceSrc="/game/piece-pink.png"
            widthEm={0.73}
            selected={activePuzzle === "o"}
            onSelect={() => select("o")}
          />

          {/* The L: a tall stem that runs up to the top of the page, plus a foot */}
          <span
            aria-hidden="true"
            className="relative ml-[0.1em] block h-[0.72em] w-[0.45em]"
          >
            <span className="absolute bottom-0 left-0 h-[300vh] w-[0.1em] bg-charcoal" />
            <span className="absolute bottom-0 left-0 h-[0.085em] w-full bg-charcoal" />
          </span>

          <span aria-hidden="true">VE THE</span>
        </div>

        {/* Line 2: PUZZLE, shifted right, with the sentence underneath */}
        <div className="ml-[2.5em] md:ml-[3.4em]">
          <div className="flex items-baseline">
            <span aria-hidden="true">P</span>

            <PuzzleLetter
              label="Open puzzle 2"
              shapeSrc="/game/letter-u.svg"
              filledSrc="/game/letter-u-filled.svg"
              pieceSrc="/game/piece-red.png"
              widthEm={0.69}
              pulseDelay="0.6s"
              selected={activePuzzle === "u"}
              onSelect={() => select("u")}
            />

            <span aria-hidden="true" className="ml-[0.12em]">
              ZZ
            </span>

            <PuzzleLetter
              label="Open puzzle 3"
              shapeSrc="/game/letter-l.svg"
              filledSrc="/game/letter-l-filled.svg"
              pieceSrc="/game/piece-blue.png"
              widthEm={0.53}
              pieceShiftEm={0.1}
              pulseDelay="1.2s"
              selected={activePuzzle === "l"}
              onSelect={() => select("l")}
            />

            {/* The E: its stem turns red on web and runs down to the footer */}
            <span
              aria-hidden="true"
              className="relative ml-[0.06em] block h-[0.72em] w-[0.46em]"
            >
              <span className="absolute top-0 left-[0.1em] h-[0.085em] w-[0.36em] bg-charcoal" />
              <span className="absolute top-1/2 left-[0.1em] h-[0.085em] w-[0.31em] -translate-y-1/2 bg-charcoal" />
              <span className="absolute bottom-0 left-[0.1em] h-[0.085em] w-[0.36em] bg-charcoal" />
              <span className="absolute top-0 left-0 h-[300vh] w-[0.1em] bg-maroon" />
            </span>
          </div>

          <p className="mt-3 w-[180px] text-xs leading-[1.4] italic md:mt-4 lg:w-[400px] md:text-2xl">
            Click to solve our creative puzzle and piece together our works.
          </p>
        </div>
      </div>

           {activePuzzle && (
        <PuzzleModal puzzle={puzzles[activePuzzle]} onClose={closePuzzle} />
      )}
    </section>
    
  );
}
