const errorWrap = (handler) => {
  return (...args) => {
    try {
      handler(...args);
    } catch (error) {
      console.info('Catch::e', 'Internal error', error);
      args[args.length - 1](null, { statusCode: 500, body: JSON.stringify({ message: 'Internal error' }) });
    }
  };
};

module.exports = errorWrap;
