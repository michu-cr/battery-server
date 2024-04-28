const  { Schema, model } = require('mongoose');

const shopeschema = Schema({
  shopename: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  address: {
    type: String,
  },
  phonenumber: {
    type: Number,
  },
});

const Shop = model('Shop', shopeschema);

module.exports = Shop;
