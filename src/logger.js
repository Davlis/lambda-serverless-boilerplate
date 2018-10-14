const winston = require('winston');

const createLogger = () => {
  if (process.env.NODE_ENV !== 'production') {
    return winston.createLogger({
      level: 'silly',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.printf(
              info => `${info.timestamp} [${info.level}]: ${info.message}`,
            ),
          ),
        }),
      ],
    });
  }

  return winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.printf(
            info => `${info.timestamp} [${info.level}]: ${info.message}`,
          ),
        ),
      }),
    ],
  });
};

module.exports = createLogger;
