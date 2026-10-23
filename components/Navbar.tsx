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
  { href: "/rate-card", label: "Rate Card" },
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
          <div
            className="hidden items-center gap-10 text-sm lg:flex"
            role="list"
          >
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
            className="relative flex h-10 w-15 items-center justify-center bg-[radial-gradient(ellipse_at_center,#000_20%,#6b5200_100%)] shadow-[0_4px_10px_rgba(0,0,0,0.3)] text-white rounded-2xl inset-shadow-[inset_0_2px_5px_rgba(251,186,9,1.0)] overflow-hidden "
          >
            <span
  aria-hidden="true"
  className="grain pointer-events-none absolute inset-0 opacity-40"
/>
            
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
            {open ? (
              <Image
                src="/icons/close.svg"
                alt="Close menu"
                width={42}
                height={42}
              />
            ) : (
              <Image
                src="/icons/menu.svg"
                alt="Open menu"
                width={42}
                height={42}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mb-4 rounded-[30px] bg-white px-[30px] pt-5 pb-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:hidden">
          <ul className="flex flex-col items-center text-lg font-light">
            {mobileLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex h-[49px] items-center justify-center rounded-[22px] bg-black text-lg text-white"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
