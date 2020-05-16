const User = require('../models/user');

function getAllUsers() {
  return User.find().exec();
}

function getUserById(userId) {
  return User.findById(userId).exec();
}

module.exports = {
  getAllUsers,
  getUserById,
};
