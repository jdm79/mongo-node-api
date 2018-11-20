const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Place = mongoose.model('place');

// defines and tests a single route handler
describe('Places controller', () => {
  // method/route/result
  it('POST to /api/places creates a new place', done => {
    Place.count().then(count => {
      request(app)
      .post('api/places')
      .send({ name: 'Vida Bakery' })
      .end(() => {
        Driver.count().then(newCount => {
          assert(count+1 === newCount);
          done();
        })
        done();
      })
    })
  });
});