import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";


type ContactLink = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
};

const menuLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/works", label: "Works" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/arahaus-company", label: "Linkedin" },
  // { href: "#", label: "Instagram" },
  { href: "https://www.tiktok.com/@arahaus_hq?_r=1&_t=ZS-9AUXWSKDz9O", label: "Tiktok" },
];

const contactLinks: ContactLink[] = [
  {
    href: "https://wa.me/2348169271057",
    label: "+234 8 169 271 057",
    icon: <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} />,
    external: true,
  },
  {
    href: "tel:+2349093303345",
    label: "090 93 303 345",
    icon: <Image src="/icons/phone.svg" alt="" width={20} height={20} />,
  },
  {
    href: "mailto:arahauscompany@gmail.com",
    label: "arahauscompany@gmail.com",
    icon: <Image src="/icons/sendhorizontal.svg" alt="" width={20} height={20} />,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-black text-[17.92px] tracking-[-0.016em] text-white md:h-[400px]">
      {/* Large faded wordmark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto max-w-[1152px] md:inset-x-16 md:translate-y-[23%]">
        <Image
          src="/logo-color.png"
          alt=""
          width={1152}
          height={311}
          className="h-auto w-full opacity-15 grayscale"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 px-4 pt-8 pb-[30vw] md:flex-row md:justify-between md:px-16 md:pt-[104px] md:pb-0">
        <Link href="/" className="self-start">
          <Image
            src="/logo-color.png"
            alt="Arahaus"
            width={200}
            height={54}
            className="h-auto w-[170px] md:w-[200px]"
          />
        </Link>

        <div className="grid grid-cols-[3fr_2fr] gap-y-10 md:flex md:gap-[18px]">
          <div className="md:w-[143px]">
            <h2 className="mb-3 leading-[1.3] font-light text-accent">Menu</h2>
            <ul className="leading-8 text-white/80">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-[143px]">
            <h2 className="mb-3 leading-[1.3] font-light text-accent">
              Connect
            </h2>
            <ul className="leading-8 text-white/80">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 md:w-[253px]">
            <h2 className="mb-3 leading-[1.3] font-light text-accent">
              Contact
            </h2>
            <ul className="flex flex-col text-white/80 md:gap-3">
              {contactLinks.map(({ href, label, icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex h-8 items-center gap-3 hover:text-white"
                  >
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
