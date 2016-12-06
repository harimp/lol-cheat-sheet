const winston = require('winston');

module.exports = (name) => {
  const logger = new winston.Logger();

  logger.add(winston.transports.Console, {
    level: 'silly',
    colorize: true,
    timestamp: true,
    showLevel: true,
    label: name,
  });

  return logger;
};
