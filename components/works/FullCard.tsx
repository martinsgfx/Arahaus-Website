"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/works";

const LOOP_MS = 1000; // time each foreground image stays

export default function FullCard({ project }: { project: Project }) {
  const { name, images } = project;
  const slides = [images.main, images.left, images.right];

  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Loop through the three foreground images
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, LOOP_MS);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Zoom in once when the card scrolls into view (mobile)
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[358/450] w-full overflow-hidden bg-black md:aspect-[1200/920]"
    >
      {/* Background: the main image, dimmed, no animation */}
      <Image
        src={images.main}
        alt=""
        fill
        sizes="(min-width: 768px) 1200px, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Foreground: loops through the three images */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`relative aspect-square w-[84%] overflow-hidden transition-all duration-700 ease-out md:aspect-[5/4] md:w-[32.5%] md:scale-100 md:opacity-100 ${
            inView ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          {slides.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`${name} ${index + 1}`}
              fill
              sizes="(min-width: 768px) 400px, 85vw"
              className={`object-cover transition-opacity duration-300 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}