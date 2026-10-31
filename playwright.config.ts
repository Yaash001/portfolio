
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",

  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "Desktop WebKit",
      use: {
        ...devices["Desktop Safari"],
        browserName: "webkit",
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "Mobile WebKit",
      use: {
        ...devices["iPhone 13"],
        browserName: "webkit",
      },
    },
  ],

  webServer: {
    command: "npx next dev --hostname 127.0.0.1",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
