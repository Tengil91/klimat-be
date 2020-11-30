const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  password: String,
  token: Number,
});

module.exports.User = mongoose.model('User', userSchema);