"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { residencePanels } from "@/content/residence-panels";
import { motion } from "@/lib/animation";
import { ResidencePanel } from "./residence-panel";

export function ResidenceStory() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let context: { revert: () => void } | undefined;
    let disposed = false;

    async function setup() {
      if (!root.current || !stage.current) return;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed || !root.current || !stage.current) return;
      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const media = gsap.utils.toArray<HTMLElement>("[data-story-media]");
        const copy = gsap.utils.toArray<HTMLElement>("[data-story-copy]");

        gsap.set(media, { autoAlpha: 0, scale: 1.045 });
        gsap.set(copy, { autoAlpha: 0, yPercent: 16 });
        gsap.set([media[0], copy[0]], { autoAlpha: 1 });
        gsap.set(copy[0], { yPercent: 0 });

        const mm = gsap.matchMedia();
        mm.add(
          {
            desktop: "(min-width: 769px) and (min-height: 680px)",
            reduce: "(prefers-reduced-motion: reduce)",
          },
          (match) => {
            if (match.conditions?.reduce) {
              gsap.set([...media, ...copy], { clearProps: "all" });
              return;
            }
            if (!match.conditions?.desktop) return;

            const timeline = gsap.timeline({
              defaults: { ease: motion.ease },
              scrollTrigger: {
                trigger: root.current,
                start: "top top",
                end: `+=${(residencePanels.length - 1) * 108}%`,
                pin: stage.current,
                scrub: 0.75,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            residencePanels.slice(1).forEach((_, index) => {
              const previous = index;
              const next = index + 1;
              const at = next;
              timeline
                .to(copy[previous], { autoAlpha: 0, yPercent: -12, duration: 0.32 }, at)
                .to(media[previous], { autoAlpha: 0, scale: 1.075, duration: 0.62 }, at)
                .fromTo(
                  media[next],
                  { autoAlpha: 0, scale: 1.045, clipPath: "inset(0 0 0 8%)" },
                  {
                    autoAlpha: 1,
                    scale: 1,
                    clipPath: "inset(0 0 0 0%)",
                    duration: 0.72,
                  },
                  at + 0.12,
                )
                .to(
                  copy[next],
                  { autoAlpha: 1, yPercent: 0, duration: 0.42, ease: motion.revealEase },
                  at + 0.28,
                )
                .to(media[next], { scale: 1.025, duration: 0.68 }, at + 0.72);
            });
          },
        );
      }, root);
    }

    void setup();
    return () => {
      disposed = true;
      context?.revert();
    };
  }, []);

  return (
    <section
      id="residence"
      ref={root}
      className="residence-story"
      aria-label="The residence"
    >
      <div ref={stage} className="story-stage">
        <div className="story-media-stack" aria-hidden="true">
          {residencePanels.map((panel, index) => (
            <div className="story-media" data-story-media key={panel.image}>
              <Image
                src={panel.image}
                alt=""
                fill
                priority={index === 0}
                quality={88}
                sizes="(min-width: 901px) 100vw, 1px"
                style={{ objectPosition: panel.focalPoint }}
              />
              <div className="story-scrim" />
            </div>
          ))}
        </div>
        <div className="story-copy-stack">
          {residencePanels.map((panel) => (
            <ResidencePanel panel={panel} key={panel.number} />
          ))}
        </div>
        <div className="story-frame" aria-hidden="true" />
        <div className="story-dots" aria-hidden="true">
          {residencePanels.map((panel) => (
            <i key={panel.number} />
          ))}
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <i />
        </div>
      </div>

      <div className="story-mobile-list">
        {residencePanels.map((panel, index) => (
          <article className="mobile-panel" key={panel.number}>
            <div className="mobile-panel-media">
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                priority={index === 0}
                quality={82}
                sizes="(max-width: 900px) 100vw, 1px"
                style={{ objectPosition: panel.focalPoint }}
              />
              <div className="story-scrim" />
            </div>
            <ResidencePanel panel={panel} />
          </article>
        ))}
      </div>
    </section>
  );
}
