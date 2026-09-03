const { defineConfig } = require("@playwright/test");

const viewports = [
  { name: "mobile-320", width: 320, height: 720, isMobile: true },
  { name: "mobile-390", width: 390, height: 844, isMobile: true },
  { name: "mobile-430", width: 430, height: 932, isMobile: true },
  { name: "desktop-1440", width: 1440, height: 900, isMobile: false },
];

module.exports = defineConfig({
  testDir: "./tests",
  outputDir: "test-results",
  reporter: process.env.CI ? [["line"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npx http-server . -p 4173 -c-1 --silent",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
  },
  projects: viewports.map(({ name, width, height, isMobile }) => ({
    name,
    use: {
      viewport: { width, height },
      screen: { width, height },
      deviceScaleFactor: 1,
      hasTouch: isMobile,
      isMobile,
    },
  })),
});
