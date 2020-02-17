const { Flight, User, Itinerary } = require('../models')

//get all users

const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll({
        include: [
          {
            model: Item
          }
        ]
      });
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
        include: [
          {
            model: Item
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


//get all flights


//get flight by id



//create user

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




//destroy



module.exports = {
getAllUsers,
getUserById,
createUser
}