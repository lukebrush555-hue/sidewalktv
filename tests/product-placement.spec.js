const { test, expect } = require("@playwright/test");

test("Product Placement page renders its core experience", async ({ page }, testInfo) => {
  const browserErrors = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") browserErrors.push(message.text());
  });

  await page.goto("/product-placement/", { waitUntil: "networkidle" });

  await expect(page).toHaveTitle("SidewalkTV Product Placement");
  await expect(page.locator("#hero-title")).toHaveText("Place your logo or product in our videos");
  await expect(page.locator(".photo-wrap img")).toBeVisible();

  const callToAction = page.getByRole("button", { name: "TELL US ABOUT YOUR PRODUCT" }).first();
  await expect(callToAction).toBeVisible();
  await page.screenshot({
    path: testInfo.outputPath("product-placement-full-page.png"),
    fullPage: true,
  });

  await callToAction.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Tell us about your product" })).toBeVisible();
  await page.screenshot({
    path: testInfo.outputPath("product-placement-modal.png"),
  });

  expect(browserErrors).toEqual([]);
});
