const request = require('supertest');
const app = require('../server.js');

describe('User API', () => {
  //get all users
  it('should show all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  });

  //get user by id
    it('should show a user', async () => {
      const res = await request(app).get('/api/users/3');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('user');
    });


    //get all arrival flights
  it('should show all arrival flights', async () => {
    const res = await request(app).get('/api/arrivingFlights/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('arrivalFlight');
  });

  //get arrival flight by id
    it('should show a users arrival flight', async () => {
      const res = await request(app).get('api/users/:id/arrivingflight');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('arrivalFlight');
    });
  
     //get all departure flights
  it('should show all departing flights', async () => {
    const res = await request(app).get('/api/departingFlights/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('departingFlight');
  });

  //get arrival departure by id
    it('should show a users departing flight', async () => {
      const res = await request(app).get('api/users/:id/departmentflight');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('departingFlight');
    });
  

});
