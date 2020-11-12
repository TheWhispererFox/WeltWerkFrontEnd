/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
// eslint-disable-next-line no-undef-init
let extend = undefined;

/**
 * The .babelrc file has been created to assist Jest for transpiling.
 * You should keep your application's babel rules in this file.
 */

if (fs.existsSync('./.babelrc')) {
  extend = './.babelrc';
}

module.exports = {
  presets: ['@quasar/babel-preset-app'],
  extends: extend,
};
