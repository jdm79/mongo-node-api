const express = require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const DB_PW = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USERNAME;

const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
  mongoose.connect(`mongodb://${DB_USER}:${DB_PW}@ds125392.mlab.com:25392/gf_places`);
}

app.use(bodyParser.json())
routes(app);

module.exports = app;

