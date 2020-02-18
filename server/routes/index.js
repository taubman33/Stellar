const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()


router.get('/', (req, res) => res.send('This is root!'))



//array of all Users
router.get('/users', controllers.getAllUsers)


//show route for user and active itineraries searched by ID
router.get('/users/:id', controllers.getUserById)


//create route to sign up a new user ->PMVP
router.post('/users', controllers.createUser)


//shows a users itineraries
router.get('users/:user_id/itineraries', controllers.getAllItineraries)


//shows users itineraries including flight and hotel info
router.get('/users/:user_id/itineraries/:id', controllers.getItineraryById)


//creates a new itinerary
router.post('/users/:user_id/itineraries', controllers.createItinerary)


//change user itinerary info
router.put('/users/:user_id/itineraries/:id', controllers.updateItinerary)


//cancels a users itinerary
router.delete('/users/:user_id/itineraries/:id', controllers.cancelItinerary)


//shows info for flights in a single itinerary
router.get('/users/:user_id/itineraries/:id/flights', controllers.getFlightById)


//shows info for hotel bookings in single itinerary -> PMVP
// router.get('/users/:user_id/itineraries/:id/hotels', controllers.getHotelById)



module.exports = router