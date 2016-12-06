const express = require('express');
const morgan = require('morgan');
const loggers = require('./logger/logger');

const app = express();
const logger = loggers('main');

app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  logger.info('Listening on port 3000.');
});
