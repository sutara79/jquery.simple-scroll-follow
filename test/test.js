/**
 * @file Start point of unit testing.
 */
const server = require('./lib/server.js');
const unit   = require('./lib/unit.js');
const config = require('./config.js');

config.set();

(async () => {
  await server.start(process.env.MY_PORT);
  await unit.report(process.env.MY_UNIT_URL); 
  process.exit();
})();
