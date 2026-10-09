import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.brand} | Austin Design-Build`,
    template: `%s | ${site.brand}`,
  },
  description:
    "A warm, detail-driven design-build studio creating thoughtful renovations, additions, and custom homes in Austin and the Hill Country.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.brand} | Homes shaped around the way you live`,
    description: "Thoughtful architecture, enduring materials, and one accountable team.",
    url: "/",
    siteName: site.brand,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/media/residence-01.webp",
        width: 1672,
        height: 941,
        alt: "Warm contemporary residence at dusk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} | Austin Design-Build`,
    description: "Homes shaped around the way you live.",
    images: ["/media/residence-01.webp"],
  },
  icons: {
    icon: asset("/icons/favicon.svg"),
  },
};

export const viewport: Viewport = {
  themeColor: "#171713",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.brand,
    url: site.siteUrl,
    email: site.email,
    telephone: site.phone,
    areaServed: site.serviceArea,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addresses[0],
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78703",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
