const pkg = require('./package')

require('dotenv').config()

module.exports = {
  poweredByHeader: false,
  generateBuildId: async () => pkg.version,
  publicRuntimeConfig: {
    API_URL: 'https://dialetus-service.now.sh',
  }
}
