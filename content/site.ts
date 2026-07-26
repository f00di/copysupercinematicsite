export type SiteConfig = {
  brand: string;
  shortBrand: string;
  locationLine: string;
  serviceArea: string;
  phone: string;
  phoneHref: string;
  email: string;
  addresses: readonly string[];
  hours: readonly string[];
  primaryCta: string;
  siteUrl: string;
};

export const site: SiteConfig = {
  brand: "Atelier North",
  shortBrand: "AN",
  locationLine: "Austin · Design-Build · Whole-Home",
  serviceArea: "Austin and the surrounding Hill Country",
  phone: "(512) 555-0147",
  phoneHref: "tel:+15125550147",
  email: "hello@ateliernorth.example",
  addresses: ["1401 Northline Drive", "Austin, Texas 78703"],
  hours: ["Monday–Friday", "8:00 AM–5:00 PM"],
  primaryCta: "Get a Free Quote",
  siteUrl: "https://example.com",
};

export const navigation = [
  { label: "The Residence", href: "#residence" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;
