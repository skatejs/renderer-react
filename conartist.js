const { config } = require('conartist');
const { babel, base, jest, rollup } = require('conartist/preset');

module.exports = config(babel(), base(), jest(), rollup());
