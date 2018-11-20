const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_PW = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USERNAME;

before(done => {
  mongoose.connect(`mongodb://${DB_USER}:${DB_PW}@ds125392.mlab.com:25392/gf_places_test`);
  mongoose.connection
    .once('open', () => done());
    .on('error', err => {
      console.warn('Warning', error);
    });
});

beforeEach(done => {
  const { places } = mongoose.connection.collections;
  places.drop()
    .then(() => done())
    .catch(() => done());
});

