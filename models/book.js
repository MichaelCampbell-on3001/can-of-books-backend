// const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {type: String},
  description: {type: String},
  status: {type: String},
  email: {type: String}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;