"use client";

import { useEffect, useState } from "react";
import { navigation, site } from "@/content/site";
import { BrandMark } from "./brand-mark";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const services = document.querySelector("#services");
    if (!services) return;
    const update = () => {
      const servicesTop = services.getBoundingClientRect().top;
      setOnLight(window.scrollY > window.innerHeight * 0.62 && servicesTop > 0);
      if (servicesTop <= window.innerHeight * 0.1) setOnLight(true);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="site-header" data-light={onLight}>
      <BrandMark />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        {site.primaryCta}
        <span aria-hidden="true">↗</span>
      </a>
      <MobileNavigation />
    </header>
  );
}
