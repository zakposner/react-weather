const express = require('express');
const moment = require('moment');
const colors = require('colors')
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// log requests to console
app.use((req, res, next) => {
  let now = moment().format('MMM Do YYYY, h:mm:ss a');
  let status = res.statusCode === 200 // format status code color by response
    ? colors.green(res.statusCode);
    : colors.red(res.statusCode);
  console.log(`${now} : ${req.method} ${colors.yellow(req.path)} ~ ${status}`);
  next();
});

// route https requests to http
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else { // if https, convers it to http
    res.redirect(`http://${req.hostname}${req.url}`);
  }
});

// load static files from dist folder
app.use(express.static('dist'));

app.listen(3000, () => {
  let now = moment().format('MMM Do YYYY, h:mm:ss a');
  console.log(colors.bgBlue(`server running on port ${PORT} at ${now}`));
});
