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
app.use(express.json());

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
    next("Server 500 - Could not post book");
  }
});

app.post('/books', async (request, response, next) => {

  try {
    let data = request.body;
    let dataToSendToMongo = await Book.create(data);

    console.log(request.body);
    response.send(dataToSendToMongo)

      } catch(error) {
        next(error)
      }
});

app.delete('/books/:id', async (request, response) => {
  const id = request.params.id;
  const email = request.query.email;
  try {
    const book = await Book.findOne({_id:id, email})
    if(!book) {
      response.status(400).send('Can\'t delete');
      return;}  
      
    if(book.email !== email) {
      response.status(400).send('Can\'t delete');
      return;} 
   
    await Book.findByIdAndDelete(id);
    response.status(204).send('Book deleted');      
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete a book with ID ${id}`);
  }
})

 app.listen(PORT, (() => console.log(`listening on port ${PORT}`)));
