const initRoutes = require('../modules/ch/next-router/initRoutes');

module.exports = initRoutes(process.env.ASSET_PREFIX, {
  '/': '/home',
  '/home': '/home',
  '/kit': '/kit',
  '/Sales':'/sales',
  '/Search':'/search',
  '/Perelet':'/perelet',
  '/Booking':'/booking',
  '/Faq':'/faq',
  '/user/:slug': '/user',
});
