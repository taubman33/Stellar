const request = require('supertest');
const app = require('../server.js');

describe('User API', () => {
  //get all users
  it('should show all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  }),

  //get user by id
    it('should show a user', async () => {
      const res = await request(app).get('/api/users/3');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('user');
    });


});
