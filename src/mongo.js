const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/login_app');

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;
