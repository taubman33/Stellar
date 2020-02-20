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
    expect(res.body).toHaveProperty('arrivingFlight');
  });

  //get arrival flight by id
    it('should show a users arrival flight', async () => {
      const res = await request(app).get('/api/users/2/arrivingflight');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('arrivingFlight');
    });
  
     //get all departure flights
  it('should show all departing flights', async () => {
    const res = await request(app).get('/api/departingflights/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('departingFlight');
  });

  //get arrival departure by id
    it('should show a users departing flight', async () => {
      const res = await request(app).get('/api/users/2/departingflight');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('departingFlight');
    });
  

    //updates a user
    it('should update an user', async () => {
      const res = await request(app)
        .put('/api/users/2')
        .send({
          name: 'John Scofield',
      hashed_password: 'password',
      number_adults: 6,
      number_children: 6,
      departingFlightId: 6,
      arrivingFlightId: 6
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('user');
    }),

    
    //deletes a user
    it('should delete a user', async () => {
      const res = await request(app)
        .del('/api/users/2')
        .send({
          name: 'Miles Davis',
          hashed_password: 'password',
          number_adults: 2,
          number_children: 3,
          departingFlightId: 2,
          arrivingFlightId: 35
        });
      expect(res.statusCode).toEqual(204);
    });

});
