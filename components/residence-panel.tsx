import Link from "next/link";
import type { ResidencePanel as Panel } from "@/content/residence-panels";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function ResidencePanel({ panel }: { panel: Panel }) {
  return (
    <article
      className={cn(
        "story-copy",
        panel.number === 1 && "story-copy-opening",
        panel.number > 1 && panel.number < 7 && "story-copy-card",
        panel.number === 7 && "story-copy-closing",
        panel.alignment === "right" && "story-copy-right",
      )}
      data-story-copy
      aria-label={`Residence story panel ${panel.number} of 7`}
    >
      <div className="story-meta">
        <span>{String(panel.number).padStart(2, "0")} / 07</span>
        <span>{panel.eyebrow}</span>
      </div>
      <h2>{panel.title}</h2>
      <p>{panel.description}</p>
      {panel.cta && (
        <div className="story-actions">
          <Link className="button button-light" href="#contact">
            {site.primaryCta}
            <span aria-hidden="true">↗</span>
          </Link>
          {panel.number === 7 && (
            <a className="text-link-light" href={site.phoneHref}>
              {site.phone}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
