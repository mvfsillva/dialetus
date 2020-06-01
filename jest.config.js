module.exports = {
  ...require('./config/test/jest-common'),
  collectCoverageFrom: ['**/src/"**/*.+(js|json|ts|tsx)"'],
  projects: ['./config/test/jest.client.js'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },
}
