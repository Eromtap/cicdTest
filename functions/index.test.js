
const request = require('supertest');
const { expressApp } = require('./index'); // import the Express app

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(expressApp).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});