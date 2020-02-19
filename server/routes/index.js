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

//create route for all flights for users

router.get('/users/:id/flights', controllers.getAllFlights)


// //shows info for flights in a single itinerary
// router.get('/users/:user_id/itineraries/:id/flights', controllers.getFlightById)


//shows info for hotel bookings in single itinerary -> PMVP
// router.get('/users/:user_id/itineraries/:id/hotels', controllers.getHotelById)



module.exports = router