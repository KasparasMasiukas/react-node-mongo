const routes = require('express').Router();
const Users = require('./controllers/users');

routes.get('/users', (req, res) => {
  Users.getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(`Failed to fetch users. Error: ${err}`);
      res.status(400).json({ message: 'Failed to fetch all users!' });
    });
});

routes.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

module.exports = routes;
