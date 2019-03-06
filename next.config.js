const pkg = require('./package')

require('dotenv').config()

module.exports = {
  target: 'serveless',
  poweredByHeader: false,
  generateBuildId: async () => pkg.version,
  env: {
    apiUrl: process.env.API_URL
  }
}
