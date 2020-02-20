const { User, ArrivingFlight, DepartingFlight } = require('../models')
const Sequelize = require('sequelize')
const op = Sequelize.Op

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

//update user
const updateUser = async (req, res) => {
  try {
      const { id } = req.params;
      const { user } = req.body
      const updated = await User.update(User, {
          where: { id: id }
      });
      if (updated) {
          const updatedUser = await User.findOne({ where: { id: id } });
          return res.status(200).json({ user: updatedUser });
      }
      throw new Error('User not found, check the airport bar!');
  } catch (error) {
      return res.status(500).send(error.message);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await User.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(204).send("User deleted");
      }
      throw new Error("User not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
};

//get arriving flight by id
const getArrivingFlightById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id },
      include: [
        {
          model: ArrivingFlight,
          where: {
            id: {[op.col]: 'User.arrivingFlightId'}
          }
        }
      ]
    });
    if (user) {
      const arrivingFlight = user.ArrivingFlight
      return res.status(200).json({ arrivingFlight });
    }
    return res.status(404).send('Flight with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//get departing flight by id
const getDepartingFlightById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id },
      include: [
        {
          model: DepartingFlight,
          where: {
            id: {[op.col]: 'User.departingFlightId'}
          }
        }
      ]
    });
    if (user) {
      const departingFlight = user.DepartingFlight
      return res.status(200).json({ departingFlight });
    }
    return res.status(404).send('Flight with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
//get all Arriving flights
const getAllArrivingFlights = async (req, res) => {
  try {
    const arrivingFlight = await ArrivingFlight.findAll();
    return res.status(200).json({ arrivingFlight });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//get all Departing flights
const getAllDepartingFlights = async (req, res) => {
    try {
      const departingFlight = await DepartingFlight.findAll();
      return res.status(200).json({ departingFlight });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };



//delete an arriving flight
const deleteArrivingFlights = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await ArrivingFlight.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(200).send("Arriving Flight deleted");
      }
      throw new Error("Flight not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
};


//delete a departing flight
const deleteDepartingFlights = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await DepartingFlight.destroy({
          where: { id: id }
      });
      if (deleted) {
          return res.status(200).send("Departing Flight deleted");
      }
      throw new Error("Flight not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
};



module.exports = {
getAllUsers,
getUserById,
createUser,
updateUser,
deleteUser,
getAllArrivingFlights,
getAllDepartingFlights,
getArrivingFlightById,
getDepartingFlightById,
deleteArrivingFlights,
deleteDepartingFlights

}