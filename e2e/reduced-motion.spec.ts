import { expect, test } from "@playwright/test";

test.use({ contextOptions: { reducedMotion: "reduce" } });

test("reduced motion exposes the complete story in normal document flow", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches),
  ).toBe(true);
  await expect(page.locator(".story-stage")).toBeHidden();
  await expect(page.locator(".story-mobile-list")).toBeVisible();
  await expect(page.locator(".mobile-panel")).toHaveCount(7);
  await page.locator(".mobile-panel").last().scrollIntoViewIfNeeded();
  await expect(page.locator(".mobile-panel").last()).toBeInViewport();
});
