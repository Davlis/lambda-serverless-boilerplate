const ACTIONS = {
  REVIEW_REQUESTED: 'review_requested',
};

const {
  USER_CONFIG,
  NEXMO_CONFIG,
} = require('../config');

const {
  StringNormalizer,
  Response,
  DepedencyRegistry,
} = require('../utils');

const {
  ReviewRequestMessage,
} = require('../messages');

const {
  MessageService,
} = require('../services');

const notify = (event, context, callback) => {
  const logger = DepedencyRegistry.get('logger');

  logger.silly(`Notify::Event: ${JSON.stringify(event)}`);

  const data = JSON.parse(event.body);
  const { action, pull_request } = data;

  const { COMPANY_NAME, MY_LOGIN, MY_PHONE_NUMBER } = USER_CONFIG;

  logger.info(`Body::action: ${action}`);

  if (action !== ACTIONS.REVIEW_REQUESTED) {
    logger.info('Notify::Wrong action');
    return callback(null, Response('Wrong action', 400));
  }

  const { html_url, title, number, requested_reviewers } = pull_request;

  const amIReviewer = requested_reviewers.find(
    rr => StringNormalizer(rr.login) === StringNormalizer(MY_LOGIN),
  );

  if (!amIReviewer) {
    logger.info('Notify::Wrong reviewer');
    return callback(null, Response('Wrong reviewer', 400));
  }

  const message = ReviewRequestMessage(html_url, title, number);
  logger.silly(`Notify::message: ${message}`);

  new MessageService(NEXMO_CONFIG).send(
    COMPANY_NAME,
    MY_PHONE_NUMBER,
    message,
  ).then((result) => {
    logger.info('MessageService::Result:', result);
    callback(null, Response({ message }, 200));
  }).catch((error) => {
    logger.error(`MessageService::Error: ${error}`);
    callback(null, Response({ message: error }, 500));
  });
};

module.exports = notify;
