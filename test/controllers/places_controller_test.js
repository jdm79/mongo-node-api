const assert = require('assert');
const request = require('supertest');
const app = require('../../app');

// defines and tests a single route handler
describe('Places controller', () => {
  // method/route/result
  it('POST to /api/places creates a new place', done => {
    request(app)
      .post('api/places')
      .send({ name: 'Vida Bakery' })
      .end(() => {
        done();
      })
  });
});