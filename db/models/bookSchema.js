const { Schema, Types, model } = require('mongoose');
const bookschema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  battery: {
    type: Schema.Types.ObjectId,
    ref: 'Battery',
  },
  price: {
    type: String,
  },
});
const Book = model('Book', bookschema);

module.exports = Book;
