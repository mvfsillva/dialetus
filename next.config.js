require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    API_URL: process.env.API_URL,
  },
}
