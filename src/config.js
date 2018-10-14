const config = {
  USER_CONFIG: {
    COMPANY_NAME: process.env.COMPANY_NAME,
    MY_LOGIN: process.env.MY_LOGIN,
    MY_PHONE_NUMBER: process.env.MY_PHONE_NUMBER,
  },
  NEXMO_CONFIG: {
    API_KEY: process.env.NEXMO_API_KEY,
    API_SECRET: process.env.NEXMO_API_SECRET,
  },
};

module.exports = config;
