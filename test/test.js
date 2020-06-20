const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should res hello world', (done) => {
    request(app).get('/').expect('new world 2', done);
  });
});
