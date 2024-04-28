const  { Schema, Types, model } = require('mongoose');

const vehicleschema = Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
  },
  fualtype: {
    type: String,
  },
});
const Vehicle = model('Vehicle', vehicleschema);

module.exports = Vehicle;
