const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const withOffline = require('next-offline')

require('dotenv').config()

module.exports = withOffline({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        navigateFallback: '/index',
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [{
          handler: 'networkFirst',
          urlPattern: /^https?.*/
        }]
      })
    )
    return config
  }
})
