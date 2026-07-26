import { describe, expect, it } from "vitest";
import { residencePanels } from "@/content/residence-panels";
import { services } from "@/content/services";
import { navigation, site } from "@/content/site";

describe("site content model", () => {
  it("defines exactly seven ordered residence panels with useful image text", () => {
    expect(residencePanels).toHaveLength(7);
    expect(residencePanels.map((panel) => panel.number)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(residencePanels.every((panel) => panel.alt.length > 24)).toBe(true);
    expect(new Set(residencePanels.map((panel) => panel.image)).size).toBe(7);
  });

  it("keeps all primary navigation targets local and unique", () => {
    expect(navigation.every((item) => item.href.startsWith("#"))).toBe(true);
    expect(new Set(navigation.map((item) => item.href)).size).toBe(navigation.length);
  });

  it("provides six services and usable contact protocols", () => {
    expect(services).toHaveLength(6);
    expect(site.phoneHref).toMatch(/^tel:/);
    expect(site.email).toContain("@");
  });
});
