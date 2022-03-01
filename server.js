'use strict';

//require detnev
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const Book = require('./models/book');

//validates that we are running

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


app.get('/',(request, response) => {
  response.status(200).send('Server is running');
})

app.get('/books', async (request, response, next) => {
  
  try {
    let bookResults = await Book.find()

    response.send(bookResults);

  } catch(error) {
    next(error);
  }


});

 app.listen(PORT, (() => console.log(`listening on port ${PORT}`)));
