const reviewRequest = (url, title, number) => {
  return `Hey, you have been requested to review #${number}-${title} pull request. ${url}`;
};

module.exports = reviewRequest;
