const withOffline = require('next-offline')

const pkg = require('./package')

require('dotenv').config()

module.exports = withOffline({
  target: 'serverless',
  poweredByHeader: false,
  generateBuildId: async () => pkg.version,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
})
