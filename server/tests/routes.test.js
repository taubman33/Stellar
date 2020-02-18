const request = require('supertest');
const app = require('../server.js');

describe('User API', () => {
  it('should show all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  }),
    it('should show a user', async () => {
      const res = await request(app).get('/api/users/3');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('user');
    }),
    it('should create a new user', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
            name: 'Charles Mingus',
      hashed_password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('user');
    }),
    it('should update a user', async () => {
      const res = await request(app)
        .put('/api/users/3')
        .send({
            name: 'Charles Mingus',
      hashed_password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('user');
    }),
    it('should delete a user', async () => {
      const res = await request(app)
        .del('/api/users/3')
        .send({
            name: 'Charles Mingus',
      hashed_password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
        });
      expect(res.statusCode).toEqual(204);
    });
});