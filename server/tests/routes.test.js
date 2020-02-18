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
    }),

  //show a user itinerary  
  it('should show a user itinerary   ', async () => {
    const res = await request(app).get('/api/users/:user_id/itineraries');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  }),


  //show users itineraries including flight and hotel info
  it('should show users itineraries including flight and hotel info    ', async () => {
    const res = await request(app).get('/api/users/:user_id/itineraries/:id');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  }),
  

  //creates a new itinerary
  it('should create a new itinerary', async () => {
    const res = await request(app)
      .post('/api/user_id/itineraries')
      .send({
        user_id: 8,
        number_adults: 4,
        number_children: 3,
        active: false
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  }),
  

  //change user itinerary info
  it('should update an itinerary', async () => {
    const res = await request(app)
      .put('/api/users/:user_id/itineraries/:id')
      .send({
        user_id: 8,
        number_adults: 4,
        number_children: 3,
        active: false
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  }),

  //cancels a users itinerary
  it('should delete an itinerary', async () => {
    const res = await request(app)
      .del('/api//users/:user_id/itineraries/1')
      .send({
        user_id: 8,
          number_adults: 4,
          number_children: 3,
          active: false
      });
    expect(res.statusCode).toEqual(204);
    expect(res.body).toHaveProperty('user');
  });

  //shows info for flights in a single itinerary
  it('should show info for flights in a single itinerary', async () => {;
  const res = await request(app).get('/api/users/:user_id/itineraries/:id/flights');
  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty('user');
});


});
