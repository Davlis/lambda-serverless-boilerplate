const {
  ErrorWrap,
  DepedencyRegistry,
} = require('../utils');
const logger = require('../logger')();

DepedencyRegistry.set('logger', logger);

const notify = require('./notify');

module.exports = {
  notify: ErrorWrap(notify),
};
