const chalk = require('chalk');

const levels = {
  system: chalk.bold.magenta,
  info: chalk.bold.blue,
  success: chalk.bold.green,
  warning: chalk.keyword('orange').bold,
  error: chalk.bold.red,
};

function log(level, message) {
  console.log(`[${levels[level](level)}]`, message);
};

function system(message) {
  log('system', message);
};

function info(message) {
  log('info', message);
};

function success(message) {
  log('success', message);
};

function warning(message) {
  log('warning', message);
};

function error(message) {
  log('error', message);
};

module.exports = {
  system, info, success, warning, error,
};
