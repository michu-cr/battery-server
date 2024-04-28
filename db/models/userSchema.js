const { Schema, model }= require('mongoose');

const schema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
  },
  place: {
    type: String,
    required: true,
  },
});

const User = model('User', schema);

module.exports= User;
