const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send({ hello: 'neptune' })
});

module.exports = app;

