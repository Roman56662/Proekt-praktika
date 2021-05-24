const initRoutes = require('../modules/ch/next-router/initRoutes');

module.exports = initRoutes(process.env.ASSET_PREFIX, {
  '/': '/home',
  '/home': '/home',
  '/kit': '/kit',
  '/Sales':'/sales',
  '/user/:slug': '/user',
});
