import { expect, test } from "@playwright/test";

test("renders seven panels and releases into services", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("webpack-hmr")) {
      consoleErrors.push(message.text());
    }
  });

  await page.goto("/");
  await expect(page.locator(".mobile-panel")).toHaveCount(7);
  await expect(page.locator("[data-story-copy]")).toHaveCount(14);
  await page.locator("#services").scrollIntoViewIfNeeded();
  await expect(page.locator("#services")).toBeInViewport();
  expect(consoleErrors).toEqual([]);
});

test("page has no horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

test("all visible images load successfully", async ({ page }) => {
  await page.goto("/");
  for (const panel of await page.locator(".mobile-panel").all()) {
    if (await panel.isVisible()) await panel.scrollIntoViewIfNeeded();
  }
  await page.locator("#contact").scrollIntoViewIfNeeded();
  const broken = await page.locator("img").evaluateAll(
    (elements) =>
      elements.filter((element) => {
        const image = element as HTMLImageElement;
        const style = getComputedStyle(image);
        const box = image.getBoundingClientRect();
        const expectedToLoad =
          style.display !== "none" && box.width > 0 && box.height > 0 && image.currentSrc;
        return expectedToLoad && (!image.complete || image.naturalWidth === 0);
      }).length,
  );
  expect(broken).toBe(0);
});
