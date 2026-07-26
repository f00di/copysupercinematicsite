"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { navigation, site } from "@/content/site";
import { BrandMark } from "./brand-mark";

const subscribeToHydration = () => () => {};

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation" : "Open navigation"}
        data-hydrated={hydrated}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      {open && (
        <div
          id="mobile-menu"
          ref={dialogRef}
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="mobile-menu-top">
            <BrandMark />
            <button
              className="menu-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <span />
              <span />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      )}
    </div>
  );
}
