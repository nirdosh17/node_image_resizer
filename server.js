const express = require('express');
const app = express();

// to be used later for POST requests
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

// load all routes
require('./app/routes/index.js')(app, {});

const port = 3020;

app.listen(port, () => {
  console.log('Image Resizer app booted on port ' + port)
});
