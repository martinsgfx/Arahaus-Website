import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

//Font imports
const neueHaas = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arahaus.com"),
  title: {
    default: "Arahaus | Family + Events",
    template: "%s | Arahaus",
  },
  description:
    "Design services for helping businesses grow, events shine, and families celebrate.",
  openGraph: {
    siteName: "Arahaus",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${neueHaas.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Loader />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
