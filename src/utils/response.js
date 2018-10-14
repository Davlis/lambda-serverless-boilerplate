const isObject = require('./isObject');
const isString = require('./isString');

const transformBody = (arg) => {
  if (isObject(arg)) {
    return JSON.stringify({ payload: arg });
  }

  if (isString(arg)) {
    return JSON.stringify({ payload: { message: arg } });
  }

  throw new Error('Payload not provided');
};

const response = (rawBody, statusCode) => {
  const result = {};

  const body = transformBody(rawBody);

  return Object.assign(result, { body, statusCode: statusCode || 200 });
};

module.exports = response;
