const { Schema, model } = require('mongoose');

const batteryschema = Schema({
  modelname: {
    type: String,
    required: true,
    trim: true,
  },
  warrenty: {
    type: String,
  },
  inStock: {
    type: Boolean,
  },
  vehicle: [
    {
      type:
      Schema.Types.ObjectId,ref:'Vehicle'
    },
  ],
  voltage: {
    type: String,
  },
  image: {
    type: String,
  },
  capacity: {
    type: String,
  },
  Price: {
    type: Number,
  },
  exchangeprice: {
    type: Number,
  },
});

const Battery = model('Battery', batteryschema);

module.exports = Battery;
