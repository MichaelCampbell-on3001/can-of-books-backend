'use strict';

//require detnev
const express = require('express');
const cors = require('cors');

//const mongoose = require('mongoose');

require('dotenv').config();


//validates that we are running

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/',(request, response) => {
  response.status(200).send('Server is running');
})

 app.listen(PORT, (() => console.log(`listening on port ${PORT}`)));
