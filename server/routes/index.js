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

//route for update user
router.put('/users', controllers.updateUser)

//route for delete user
router.delete('/users', controllers.updateUser)

//create route for all flights for users

router.get('/users/:id/arrivingflight', controllers.getAllArrivingFlights)

//create route for all flights for users

router.get('/users/:id/departingflight', controllers.getAllDepartingFlights)


module.exports = router
