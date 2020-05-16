const should = require('should');
const mongoose = require('mongoose');
const Users = require('../src/controllers/users');

describe('Users', function () {
  before(function () {
    // connect to DB
    mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING ||
        'mongodb://database:27017/db',
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
  });

  describe('#getAllUsers()', function () {
    it('should return all users from the DB', function (done) {
      Users.getAllUsers()
        .then((users) => {
          users.length.should.equal(2);
          users[0].name.should.be.instanceOf(String);
          users[0].surname.should.be.instanceOf(String);
          done();
        })
        .catch(done);
    });
  });

  describe('#getUserById()', function () {
    it('should return an existing user if exists', function (done) {
      Users.getUserById('5ec02537f4232fefa21dd5ec')
        .then((user) => {
          user.name.should.equal('Kamelia');
          done();
        })
        .catch(done);
    });

    it('should return an error if user does not exist', function (done) {
      Users.getUserById('123123123')
        .then((user) => {
          done(new Error(`User returned! User:${user}`));
        })
        .catch(() => done());
    });
  });
});
