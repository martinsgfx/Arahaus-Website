import Image from "next/image";

type PuzzleLetterProps = {
  label: string;
  shapeSrc: string;
  filledSrc: string;
  pieceSrc: string;
  widthEm: number;
  pieceShiftEm?: number;
  pulseDelay?: string;
  selected: boolean;
  onSelect: () => void;
};

export default function PuzzleLetter({
  label,
  shapeSrc,
  filledSrc,
  pieceSrc,
  widthEm,
  pieceShiftEm = 0,
  pulseDelay = "0s",
  selected,
  onSelect,
}: PuzzleLetterProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={selected}
      onClick={onSelect}
      className="relative block h-[0.7em] shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"
      style={{ width: `${widthEm}em` }}
    >
      <Image
        src={shapeSrc}
        alt=""
        fill
        sizes="20vw"
        className="object-contain"
      />
      <Image
        src={filledSrc}
        alt=""
        fill
        sizes="20vw"
        className="letter-fill object-contain opacity-0"
        style={{ animationDelay: pulseDelay }}
      />

      {/* The piece is centered, then shifted if the design puts it off-center */}
      <span
        className="absolute top-1/2 left-1/2 block h-[0.29em] w-[0.29em]"
        style={{
          transform: `translate(calc(-50% + ${pieceShiftEm}em), -50%)`,
        }}
      >
        <span
          className="piece-pulse relative block h-full w-full"
          style={{ animationDelay: pulseDelay }}
        >
          <Image
            src={pieceSrc}
            alt=""
            fill
            sizes="10vw"
            className="object-contain"
          />
        </span>
      </span>
    </button>
  );
}
