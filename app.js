const express = require('express');
const routes = require('./routes/routes')
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !=== 'test') {
  mongoose.connect('mongodb://localhost/gf-places');
}

app.use(bodyParser.json())
routes(app);

module.exports = app;

