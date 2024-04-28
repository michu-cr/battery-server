const { Schema, model } = require('mongoose');

const brandschema = Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});
const Brand = model('Brand', brandschema);
module.exports = Brand;
