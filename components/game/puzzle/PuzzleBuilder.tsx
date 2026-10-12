"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import type { PuzzleTheme } from "@/lib/puzzle";

// ─── Config ────────────────────────────────────────────────────────────────
const COLS = 3;
const ROWS = 3;
const TOTAL = COLS * ROWS;

// Width / height of a single piece cell. This must match your puzzle image:
// an image 420 wide and 270 tall gives cells of 140 x 90.
const IMAGE_ASPECT = 420 / 3 / 90;

// ─── Types ─────────────────────────────────────────────────────────────────
type Edge = -1 | 0 | 1; // 0 = flat side, 1 = tab sticking out, -1 = slot going in

type Piece = {
  id: number;
  row: number;
  col: number;
  top: Edge;
  right: Edge;
  bottom: Edge;
  left: Edge;
};

type Board = (number | null)[];

// ─── Build interlocking edges ───────────────────────────────────────────────
function randomEdge(): Edge {
  return Math.random() > 0.5 ? 1 : -1;
}

function flip(edge: Edge): Edge {
  if (edge === 1) return -1;
  if (edge === -1) return 1;
  return 0;
}

function buildEdges(): Piece[] {
  const hEdges: Edge[][] = Array.from({ length: ROWS + 1 }, (_, r) =>
    Array.from({ length: COLS }, (): Edge =>
      r === 0 || r === ROWS ? 0 : randomEdge(),
    ),
  );
  const vEdges: Edge[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS + 1 }, (_, c): Edge =>
      c === 0 || c === COLS ? 0 : randomEdge(),
    ),
  );

  return Array.from({ length: TOTAL }, (_, i): Piece => {
    const r = Math.floor(i / COLS);
    const c = i % COLS;
    return {
      id: i,
      row: r,
      col: c,
      top: hEdges[r][c],
      bottom: flip(hEdges[r + 1][c]),
      left: vEdges[r][c],
      right: flip(vEdges[r][c + 1]),
    };
  });
}

// ─── SVG path for a rectangular puzzle piece ────────────────────────────────
function piecePath(
  top: Edge,
  right: Edge,
  bottom: Edge,
  left: Edge,
  W: number,
  H: number,
): string {
  const minS = Math.min(W, H);
  const T = minS * 0.28;
  const R = minS * 0.14;
  const mH = W * 0.5;
  const mV = H * 0.5;
  let d = `M 0,0 `;

  if (top === 0) {
    d += `L ${W},0 `;
  } else {
    const D = T * -top;
    d += `L ${mH - R * 1.4},0 C ${mH - R},${D * 0.3} ${mH - R},${D} ${mH},${D} C ${mH + R},${D} ${mH + R},${D * 0.3} ${mH + R * 1.4},0 L ${W},0 `;
  }
  if (right === 0) {
    d += `L ${W},${H} `;
  } else {
    const D = T * right;
    d += `L ${W},${mV - R * 1.4} C ${W + D * 0.3},${mV - R} ${W + D},${mV - R} ${W + D},${mV} C ${W + D},${mV + R} ${W + D * 0.3},${mV + R} ${W},${mV + R * 1.4} L ${W},${H} `;
  }
  if (bottom === 0) {
    d += `L 0,${H} `;
  } else {
    const D = T * bottom;
    d += `L ${mH + R * 1.4},${H} C ${mH + R},${H + D * 0.3} ${mH + R},${H + D} ${mH},${H + D} C ${mH - R},${H + D} ${mH - R},${H + D * 0.3} ${mH - R * 1.4},${H} L 0,${H} `;
  }
  if (left === 0) {
    d += `L 0,0 `;
  } else {
    const D = T * -left;
    d += `L 0,${mV + R * 1.4} C ${D * 0.3},${mV + R} ${D},${mV + R} ${D},${mV} C ${D},${mV - R} ${D * 0.3},${mV - R} 0,${mV - R * 1.4} L 0,0 `;
  }
  return d + "Z";
}

// ─── Empty Slot SVG ─────────────────────────────────────────────────────────
type EmptySlotProps = {
  piece: Piece;
  cellW: number;
  cellH: number;
  highlighted: boolean;
  accent: string;
};

function EmptySlot({ piece, cellW, cellH, highlighted, accent }: EmptySlotProps) {
  const pad = Math.min(cellW, cellH) * 0.32;
  const W = cellW;
  const H = cellH;
  const path = piecePath(piece.top, piece.right, piece.bottom, piece.left, W, H);

  return (
    <svg
      width={W + pad * 2}
      height={H + pad * 2}
      style={{ overflow: "visible", display: "block", pointerEvents: "none" }}
    >
      {/* Drop shadow */}
      <path
        d={path}
        transform={`translate(${pad + 1},${pad + 2})`}
        fill="rgba(0,0,0,0.1)"
      />

      {/* Neutral slot fill */}
      <path
        d={path}
        transform={`translate(${pad},${pad})`}
        fill={highlighted ? "rgba(241,245,249,1)" : "rgba(248,250,252,1)"}
      />

      {/* Highlight overlay when a piece is selected */}
      {highlighted && (
        <path
          d={path}
          transform={`translate(${pad},${pad})`}
          fill={accent}
          fillOpacity={0.15}
        />
      )}

      {/* Border */}
      <path
        d={path}
        transform={`translate(${pad},${pad})`}
        fill="none"
        stroke={highlighted ? accent : "rgba(0,0,0,0.3)"}
        strokeWidth={highlighted ? 2 : 1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Single Piece SVG ───────────────────────────────────────────────────────
type PuzzlePieceProps = {
  piece: Piece;
  cellW: number;
  cellH: number;
  isSelected: boolean;
  isTray: boolean;
  image: string;
  selectedStroke: string;
};

function PuzzlePiece({
  piece,
  cellW,
  cellH,
  isSelected,
  isTray,
  image,
  selectedStroke,
}: PuzzlePieceProps) {
  const pad = Math.min(cellW, cellH) * 0.32;
  const W = cellW;
  const H = cellH;
  const uid = `cp-${piece.id}-${Math.round(W)}-${Math.round(H)}-${isTray ? "t" : "b"}`;
  const path = piecePath(piece.top, piece.right, piece.bottom, piece.left, W, H);

  return (
    <svg
      width={W + pad * 2}
      height={H + pad * 2}
      style={{ overflow: "visible", display: "block", pointerEvents: "none" }}
    >
      <defs>
        <clipPath id={uid}>
          <path d={path} transform={`translate(${pad},${pad})`} />
        </clipPath>
      </defs>
      {/* Shadow */}
      <path
        d={path}
        transform={`translate(${pad + 2},${pad + 3})`}
        fill={isSelected ? "rgba(232,244,255,0.4)" : "rgba(0,0,0,0.25)"}
      />
      {/* Image */}
      <image
        href={image}
        x={pad - piece.col * W}
        y={pad - piece.row * H}
        width={COLS * W}
        height={ROWS * H}
        clipPath={`url(#${uid})`}
        preserveAspectRatio="xMidYMid slice"
      />
      {/* Outline */}
      <path
        d={path}
        transform={`translate(${pad},${pad})`}
        fill="none"
        stroke={isSelected ? selectedStroke : "rgba(0,0,0,0.4)"}
        strokeWidth={isSelected ? 2.5 : 1.5}
      />
    </svg>
  );
}

// ─── Shuffle ────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Main Component ─────────────────────────────────────────────────────────
type PuzzleBuilderProps = {
  puzzle: PuzzleTheme;
  onClose: () => void;
};

export default function PuzzleBuilder({ puzzle, onClose }: PuzzleBuilderProps) {
  const [pieces] = useState<Piece[]>(() => buildEdges());
  const [board, setBoard] = useState<Board>(() => Array(TOTAL).fill(null));
  const [tray, setTray] = useState<number[]>(() =>
    shuffle(Array.from({ length: TOTAL }, (_, i) => i)),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  // The colors are passed down as CSS variables so Tailwind classes can use them
  const themeVars = {
    "--accent": puzzle.accent,
    "--accent-dark": puzzle.accentDark,
    "--accent-light": puzzle.accentLight,
    "--accent-mid": puzzle.accentMid,
  } as CSSProperties;

  // ── Responsive sizing ──────────────────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null);
  const [cellW, setCellW] = useState(120);
  const cellH = cellW / IMAGE_ASPECT;

  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      const available = containerRef.current.offsetWidth - 64;
      const w = Math.floor(available / COLS);
      setCellW(Math.max(w, 60));
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const trayCellW = cellW * 0.58;
  const trayCellH = trayCellW / IMAGE_ASPECT;

  // ── Escape closes the top-most layer: guide, then win message, then puzzle ──
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (showGuide) setShowGuide(false);
      else if (showWin) setShowWin(false);
      else onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showGuide, showWin, onClose]);

  // ── Placement logic ────────────────────────────────────────────────────────
  const checkComplete = useCallback(
    (newBoard: Board) => {
      if (newBoard.every((id, slot) => id !== null && pieces[id].id === slot)) {
        setCompleted(true);
        setTimeout(() => setShowWin(true), 400);
      }
    },
    [pieces],
  );

  function handleTrayClick(pieceId: number) {
    setSelected((prev) => (prev === pieceId ? null : pieceId));
  }

  function handleSlotClick(slotIndex: number) {
    const placedId = board[slotIndex];

    if (selected !== null) {
      const newBoard = [...board];
      const newTray = tray.filter((id) => id !== selected);
      if (placedId !== null) newTray.push(placedId);
      newBoard[slotIndex] = selected;
      setBoard(newBoard);
      setTray(newTray);
      setSelected(null);
      checkComplete(newBoard);
    } else if (placedId !== null) {
      const newBoard = [...board];
      newBoard[slotIndex] = null;
      setBoard(newBoard);
      setTray((t) => [...t, placedId]);
      setSelected(placedId);
    }
  }

  function handleReset() {
    setBoard(Array(TOTAL).fill(null));
    setTray(shuffle(Array.from({ length: TOTAL }, (_, i) => i)));
    setSelected(null);
    setCompleted(false);
    setShowWin(false);
  }

  const boardW = cellW * COLS;
  const boardH = cellH * ROWS;
  const tabOverflow = cellH * 0.28;

  return (
    <div className="w-full max-w-[520px]" style={themeVars}>
      {/* Card */}
      <div
        ref={containerRef}
        className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3 sm:px-5 sm:pt-5">
          <h2 className="font-sans text-sm font-bold tracking-tight text-slate-800 sm:text-base">
            Puzzle Builder
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowGuide(true)}
              className="flex items-center gap-1 rounded-full border border-(color:--accent-dark) bg-(--accent-light) px-3 py-1.5 font-sans text-xs text-(color:--accent-dark) active:bg-(--accent-mid)"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <span>👁</span> Guide
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full bg-slate-100 px-3 py-1.5 font-sans text-xs text-slate-600 active:bg-slate-200"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close puzzle"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200 text-xl leading-none text-slate-500"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Board */}
        <div
          className="relative flex items-center justify-center"
          style={{
            paddingTop: tabOverflow + 16,
            paddingBottom: tabOverflow + 16,
            paddingLeft: tabOverflow + 16,
            paddingRight: tabOverflow + 16,
          }}
        >
          <div className="pointer-events-none absolute top-2 left-2 h-20 w-20 rounded-full bg-amber-100 opacity-40 blur-2xl" />
          <div className="pointer-events-none absolute right-2 bottom-2 h-20 w-20 rounded-full bg-sky-100 opacity-40 blur-2xl" />

          <div className="relative" style={{ width: boardW, height: boardH }}>
            {Array.from({ length: TOTAL }, (_, slot) => {
              const row = Math.floor(slot / COLS);
              const col = slot % COLS;
              const placedId = board[slot];
              const piece = placedId !== null ? pieces[placedId] : null;
              const isCorrect = piece !== null && piece.id === slot;

              return (
                <div
                  key={slot}
                  onClick={() => handleSlotClick(slot)}
                  style={{
                    position: "absolute",
                    left: col * cellW,
                    top: row * cellH,
                    width: cellW,
                    height: cellH,
                    cursor: selected !== null || piece ? "pointer" : "default",
                    zIndex: piece ? 2 : 1,
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {/* Empty slot: puzzle-shaped hole */}
                  {!piece && (
                    <div
                      className="absolute"
                      style={{
                        left: -(cellW * 0.25),
                        top: -(cellH * 0.32),
                        pointerEvents: "none",
                      }}
                    >
                      <EmptySlot
                        piece={pieces[slot]}
                        cellW={cellW}
                        cellH={cellH}
                        highlighted={selected !== null}
                        accent={puzzle.accent}
                      />
                    </div>
                  )}

                  {/* Placed piece */}
                  {piece && (
                    <div
                      className="absolute"
                      style={{
                        left: -(cellW * 0.25),
                        top: -(cellH * 0.32),
                        filter: isCorrect
                          ? "drop-shadow(0 0 7px rgba(34,197,94,0.55))"
                          : "none",
                        transition: "filter 0.3s",
                      }}
                    >
                      <PuzzlePiece
                        piece={piece}
                        cellW={cellW}
                        cellH={cellH}
                        isSelected={false}
                        isTray={false}
                        image={puzzle.image}
                        selectedStroke={puzzle.accentDark}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hint bar */}
        <div className="border-t border-slate-100 bg-slate-50 px-4 py-1.5">
          <p className="text-center text-xs leading-tight text-slate-500">
            {selected !== null
              ? "✦ Tap a slot on the board to place the piece"
              : "Tap any piece below to select it"}
          </p>
        </div>

        {/* Tray */}
        <div
          className="flex items-center gap-2 bg-(--accent) px-3"
          style={{
            minHeight: trayCellH + 48,
            overflowX: "auto",
            overflowY: "visible",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            paddingTop: 16,
            paddingBottom: 16,
          }}
        >
          {tray.length === 0 ? (
            <p className="w-full py-2 text-center text-sm text-white">
              {completed ? "All pieces placed!" : "No pieces in tray"}
            </p>
          ) : (
            tray.map((pieceId) => {
              const piece = pieces[pieceId];
              const isSel = selected === pieceId;
              return (
                <button
                  type="button"
                  key={pieceId}
                  onClick={() => handleTrayClick(pieceId)}
                  className="shrink-0 focus:outline-none"
                  style={{
                    padding: 4,
                    margin: -4,
                    background: "transparent",
                    border: "none",
                    transform: isSel
                      ? "translateY(-12px) scale(1.12)"
                      : "translateY(0) scale(1)",
                    filter: isSel
                      ? "drop-shadow(0 8px 18px rgba(250,204,21,0.75))"
                      : "drop-shadow(1px 3px 5px rgba(0,0,0,0.6))",
                    transition:
                      "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.2s ease",
                    WebkitTapHighlightColor: "transparent",
                    WebkitUserSelect: "none",
                    userSelect: "none",
                  }}
                >
                  <PuzzlePiece
                    piece={piece}
                    cellW={trayCellW}
                    cellH={trayCellH}
                    isSelected={isSel}
                    isTray={true}
                    image={puzzle.image}
                    selectedStroke={puzzle.accentDark}
                  />
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Guide modal */}
      {showGuide && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="flex w-full max-w-[480px] flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:w-auto sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="h-1 w-10 rounded-full bg-slate-200" />
            </div>

            {/* Title */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  Puzzle Guide
                </h2>
                <p className="text-xs text-slate-500">
                  Use this as a reference while solving
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                aria-label="Close guide"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-lg leading-none text-slate-500"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                ×
              </button>
            </div>

            {/* Full reference image */}
            <div className="mx-4 my-4 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-inner">
              <Image
                src={puzzle.image}
                alt="Puzzle reference"
                width={0}
                height={0}
                sizes="480px"
                className="block h-auto w-full"
                draggable={false}
              />
            </div>

            <p className="px-4 pb-5 text-center text-xs text-slate-500">
              Tap anywhere outside to close
            </p>
          </div>
        </div>
      )}

      {/* Win modal */}
      {showWin && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center"
          onClick={() => setShowWin(false)}
        >
          <div
            className="flex w-full max-w-[400px] flex-col items-center gap-4 rounded-t-3xl bg-white p-8 text-center shadow-2xl sm:w-auto sm:rounded-3xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={puzzle.image}
              alt="Completed puzzle"
              width={0}
              height={0}
              sizes="400px"
              className="h-auto w-full"
            />
            <h2 className="text-xl font-bold text-black sm:text-2xl">
              Nice Work!
            </h2>
            <p className="text-sm text-gray-600">
              You’ve unlocked what’s coming soon. We’re crafting something bold
              for you.
            </p>
            <button
              type="button"
              onClick={() => {
                handleReset();
                onClose();
              }}
              className="mt-1 w-full rounded-full bg-black px-8 py-3 text-sm font-medium text-white sm:w-auto"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}