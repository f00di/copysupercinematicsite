import { expect, test } from "@playwright/test";

test("primary anchors and contact actions work", async ({ page }, testInfo) => {
  if (testInfo.project.name === "mobile") test.skip();
  await page.goto("/");
  await expect(page.locator("header")).toBeVisible();
  await page.getByRole("link", { name: "Services", exact: true }).first().click();
  await expect(page.locator("#services")).toBeInViewport();
  await page.getByRole("link", { name: "Contact", exact: true }).first().click();
  await expect(page.locator("#contact")).toBeInViewport();
  await expect(page.locator("#contact").locator('a[href^="tel:"]')).toBeVisible();
  await expect(
    page.locator("#contact").locator('a[href^="mailto:"]').first(),
  ).toBeVisible();
});

test("mobile navigation traps interaction and closes with Escape", async ({
  page,
}, testInfo) => {
  if (testInfo.project.name !== "mobile") test.skip();
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await expect(trigger).toHaveAttribute("data-hydrated", "true");
  await trigger.click();
  await expect(page.getByRole("dialog", { name: "Site navigation" })).toBeVisible();
  await expect(page.locator('button[aria-controls="mobile-menu"]')).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Site navigation" })).toHaveCount(0);
  await expect(page.locator('button[aria-controls="mobile-menu"]')).toBeFocused();

  await page.locator('button[aria-controls="mobile-menu"]').click();
  await page.getByRole("dialog").getByRole("link", { name: "Services" }).click();
  await expect(page.locator("#services")).toBeInViewport();
});
