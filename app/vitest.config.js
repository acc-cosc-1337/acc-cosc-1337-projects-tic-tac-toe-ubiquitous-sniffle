import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/__tests__/**/*.test.js', 'src/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      // Only measure engine coverage (UI is a demo harness).
      include: ['src/engine/**/*.js'],
      lines: 75,
    },
  },
})
