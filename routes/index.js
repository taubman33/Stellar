const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))


// GET array of all Users
router.get('/users', controllers.getAllUsers)

//GET route for user and active itineraries searched by ID
router.get('/users/:id', controllers.getUserById)

//CREATE route to sign up a new user ->PMVP
router.post('/users', controllers.createUser)

//UPDATE route for update user
router.put('/users/:id', controllers.updateUser)

//DELETE route for delete user
router.delete('/users/:id', controllers.deleteUser)

//GET route for arrival flights for users
router.get('/users/:id/arrivingflight', controllers.getArrivingFlightById)

//GET route for departing flights for users
router.get('/users/:id/departingflight', controllers.getDepartingFlightById)

//GET route for getting all arriving flights
router.get('/arrivingFlights', controllers.getAllArrivingFlights)

//GET route for getting all departing flight
router.get('/departingFlights', controllers.getAllDepartingFlights)

//DELETE deleting arriving flight by ID
router.delete('/arrivingFlights', controllers.deleteArrivingFlights)

//DELETE deleting departing flight
router.delete('/departingFlights', controllers.deleteDepartingFlights)

module.exports = router
