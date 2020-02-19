const { Flight, User, Itinerary } = require('../models')

//get all users
const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

//get user by id
const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        where: { id: id },
      });
      if (user) {
        return res.status(200).json({ user });
      }
      return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

//create user -> PMVP
const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({
        user
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

//get all itinieraries
const getAllItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.findAll();
    return res.status(200).json({ itineraries })
  } catch (error) {
    return res.status(500).send(error.message)
  }
};

//get itinerary by id
const getItineraryById = async (req, res) => {
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.findOne({
      where: { id: id }
    });
    if (user) {
      return res.status(200).json({ itinerary });
    }
    return res.status(404).send('User with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//create itinerary
const createItinerary = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.user_id } })
    const flight = await Flight.create(req.body)
    await flight.setUser(user)
    return res.status(201).json({
      item
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//change user itinerary info
const updateItinerary = async (req, res) => {
  try {
    const { id } = req.params
    const updated = await Itinerary.update(req.body, {
      where: { id: id }
    })
    if (updated) {
      const updatedItinerary = await Itinerary.findOne({ where: { id: id } })
      return res.status(200).json({ itinerary: updatedItinerary })
    }
    throw new Error('Item not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//cancels a users itinerary
const cancelItinerary = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Itinerary.destroy({
      where: { id: id }
    })
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//get flight by id
const getFlightById = async (req, res) => {
    try {
      const { id } = req.params;
      const flight = await User.findOne({
        where: { id: id },
        include: [
          {
            model: Flight
          }
        ]
      });
      if (user) {
        return res.status(200).json({ user });
      }
      return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


module.exports = {
getAllUsers,
getUserById,
createUser,
getAllItineraries,
getItineraryById,
createItinerary,
updateItinerary,
cancelItinerary,
getFlightById


}