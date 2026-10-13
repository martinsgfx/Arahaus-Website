"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroImage = {
  src: string;
  alt: string;
};

const images: HeroImage[] = [
  { src: "/hero/01-stickers.jpg", alt: "Sticker designs" },
  { src: "/hero/02-z-fest-tags.jpg", alt: "Z Fest tags" },
  { src: "/hero/03-zola.jpg", alt: "Zola" },
  { src: "/hero/04-bfcp.jpg", alt: "BFCP" },
  { src: "/hero/05-mockup.jpg", alt: "Design mockup" },
  { src: "/hero/06-menu-book.jpg", alt: "Menu book" },
  { src: "/hero/07-welcome-pack.jpg", alt: "Welcome pack" },
  { src: "/hero/08-artboard-mockup.jpg", alt: "Artboard mockup" },
  { src: "/hero/09-magazine.jpg", alt: "Magazine mockup" },
  { src: "/hero/10-band.jpg", alt: "Wristband mockup" },
  { src: "/hero/11-print-mockup.jpg", alt: "Print mockup" },
  { src: "/hero/12-family-tree.jpg", alt: "Family tree mockup" },
];

// Image numbers, counted left to right. Each group shows, then hides.
const SEQUENCE: number[][] = [
  [1, 4, 7, 9],
  [2, 3, 5, 7, 8, 10, 12],
  [1, 6, 8, 9, 10, 11, 12],
  [2, 4, 5, 8, 10],
  [2, 3, 6, 9, 12],
];

const START_DELAY_MS = 1000; // wait for the loader to finish
const SHOW_MS = 1500; // how long a group stays before it hides
const GAP_MS = 0; // time after hiding before the next group appears

export default function HeroGrid() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let step = 0;
    let timer: ReturnType<typeof setTimeout>;

    function showGroup() {
      setVisible(SEQUENCE[step]);
      timer = setTimeout(hideGroup, SHOW_MS);
    }

    function hideGroup() {
      setVisible([]);
      step = (step + 1) % SEQUENCE.length;
      timer = setTimeout(showGroup, GAP_MS);
    }

    timer = setTimeout(showGroup, START_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-[15px]">
      <div className="grid grid-cols-3 gap-[3px]  md:grid-cols-4">
        {images.map((image, index) => {
          const isVisible = visible.includes(index + 1);

          return (
            <div key={image.src} className="aspect-[312/167]">
              <div
                className={`relative h-full ${isVisible ? "opacity-100" : "hidden"}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}