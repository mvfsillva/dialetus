const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  watchPlugins: ['jest-watch-select-projects'],
}
