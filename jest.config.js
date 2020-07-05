module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: ['**/*.ts(x)?', '!/**/*.stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/config/test-setup.ts']
}
