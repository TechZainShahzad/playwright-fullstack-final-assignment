import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    browserName: 'chromium',
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
