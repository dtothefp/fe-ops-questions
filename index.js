require('babel-register');
require('babel-polyfill');

const file = process.argv[2];

require(`./${file}`);
