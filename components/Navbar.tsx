"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Puzzle, X, CircleEllipsis } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/works", label: "Works" },
];

const actionLinks = [
  { href: "/rate-card", label: "Rate Card" },
  { href: "#contact", label: "Contact Us" },
];

const mobileLinks = [
  { href: "/", label: "Home" },
  ...navLinks,
  ...actionLinks,
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/60 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
        {/* Left: logo + main links */}
        <div className="flex items-center lg:gap-24 xl:gap-77.5">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/logo-black.svg"
              alt="Arahaus"
              width={85}
              height={23}
              priority
            />
          </Link>
          <div className="hidden items-center gap-10 text-sm lg:flex" role="list">
            {navLinks.map((link) => (
              <div key={link.href} role="listitem">
                <Link href={link.href}>{link.label}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right: game button, action links, mobile menu button */}
        <div className="flex items-center gap-6">
          <Link
            href="/game"
            aria-label="Play game"
            className="relative flex h-10 w-15 items-center justify-center bg-black text-white rounded-2xl inset-shadow-[inset_0_2px_5px_rgba(251,186,9,1.0)] "
          >
            <span className="play-icon absolute inset-0 flex items-center justify-center">
              <Puzzle size={21} className="rotate-45" />
            </span>
            <span className="play-text absolute inset-0 flex items-center justify-center text-sm">
              Play
            </span>
          </Link>
          <ul className="hidden items-center gap-6 text-sm lg:flex">
            {actionLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <Image src="/icons/close.svg" alt="Close menu" width={42} height={42} /> : <Image src="/icons/menu.svg" alt="Open menu" width={42} height={42} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col items-center gap-8 border-2 rounded-3xl bg-white mx-14 border-black/10 px-6 py-10 lg:hidden">
          {mobileLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  link.href === "/contact"
                    ? "rounded-2xl bg-black w-full text-white px-24 py-3 transition-colors "
                    : undefined
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
