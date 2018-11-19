const assert = require('assert');
const request = require('supertest');
const app = require('../app');

// defines and tests a single route handler
describe('the express app', () => {
  it('handles a GET request to /api', done => {
    request(app)
      .get('/api')
      .end((err, response) => {
        assert(response.body.hello === 'neptune');
        done();
      });
  });
});