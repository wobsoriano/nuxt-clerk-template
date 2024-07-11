import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

export default defineConfig<ConfigOptions>({
  testDir: fileURLToPath(new URL('e2e', import.meta.url)),
  outputDir: 'test-results/',
  webServer: {
    command: 'pnpm dev',
  },
  use: {
    headless: false,
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  projects: [
    {
      name: 'global setup',
      testMatch: /global\.setup\.ts/,
    },
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
      dependencies: ['global setup'],
    },
  ],
})
