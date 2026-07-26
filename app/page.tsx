import { ContactSection } from "@/components/contact-section";
import { ResidenceStory } from "@/components/residence-story";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <h1 className="sr-only">Atelier North, Austin design-build studio</h1>
        <ResidenceStory />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
