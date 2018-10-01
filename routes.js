const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes()) // eslint-disable-line no-multi-assign

routes.add('about')
routes.add('dialect', '/dialect/:slug')
