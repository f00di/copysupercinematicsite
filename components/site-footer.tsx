import { navigation, site } from "@/content/site";
import { BrandMark } from "./brand-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrandMark />
      <p>{site.locationLine}</p>
      <nav aria-label="Footer navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p>
        © {new Date().getFullYear()} {site.brand}
      </p>
    </footer>
  );
}
