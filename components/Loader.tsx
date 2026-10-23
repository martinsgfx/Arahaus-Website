"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STORAGE_KEY = "arahaus-loader-seen";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const hasSeenLoader = window.localStorage.getItem(STORAGE_KEY) === "true";

    if (hasSeenLoader) {
      setDone(true);
      return;
    }

    const timer = setTimeout(() => {
      setDone(true);
      window.localStorage.setItem(STORAGE_KEY, "true");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div className="loader pointer-events-none" aria-hidden="true">
      <div className="loader-panel">
        <div className="loader-panel-body" />
        <svg
          className="loader-panel-arc"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0 H100 V100 Q50 -100 0 100 Z" />
        </svg>
      </div>
      <div className="loader-logo">
        <div className="loader-logo-inner">
          <Image
            src="/logo-white.svg"
            alt=""
            width={148}
            height={40}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
