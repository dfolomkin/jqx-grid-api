const express = require('express');
const bodyParser = require('body-parser');

const employeesRoute = require('./routes/employees');
const projectsRoute = require('./routes/projects');

const frontUrl = 'localhost:9003';
const app = express();

app.use(bodyParser());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', `http://${frontUrl}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', employeesRoute);
app.use('/api', projectsRoute);

module.exports = app;
