const initRoutes = require('../modules/ch/next-router/initRoutes');

module.exports = initRoutes(process.env.ASSET_PREFIX, {
  '/': '/home',
  '/home': '/home',
  '/kit': '/kit',
  '/tours': '/tours',
  '/tour': '/tour',
  '/user/:slug': '/user',
});
