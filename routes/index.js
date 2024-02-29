// routes/index.js
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api'); // This will automatically look for an index.js inside the api folder

module.exports = {
  homeRoutes,
  apiRoutes,
};