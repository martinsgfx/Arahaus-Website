import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { siteUrl } from "@/lib/site";

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

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arahaus",
  url: siteUrl,
  logo: `${siteUrl}/logo-color.png`,
  email: "arahauscompany@gmail.com",
  telephone: "+2348169271057",
  sameAs: [] as string[], // add your Instagram, LinkedIn and TikTok page addresses
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData).replace(/</g, "\\u003c"),
          }}
        />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
