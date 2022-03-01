const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book');

async function bookData() {

  await Book.create({
    title: 'Oh, The Places You\'ll Go',
    description: 'This classic book, loved by generations of families, talks to the young reader about what life is, what they can expect as they get older and how to move through the experience of living with joy, thankfulness, ambition and kindness.',
    status: 'Status pending',
    email: 'mikec@gmail.com'
  });

  await Book.create({
    title: 'The Forever War',
    description: 'The Forever War (1974) is a military science fiction novel by American author Joe Haldeman, telling the contemplative story about human soldiers fighting an interstellar war against an alien civilization known as the Taurans. It won the Nebula Award in 1975 and the Hugo and Locus awards in 1976.',
    status: 'Status pending',
    email: 'danb@gmail.com'
  });

  await Book.create({
    title: 'Sphere',
    description: 'The story follows Norman Johnson, a psychologist engaged by the United States Navy, who joins a team of scientists assembled to examine a spacecraft of unknown origin discovered on the bottom of the Pacific Ocean.',
    status: 'Status pending',
    email: 'danb@gmail.com'
  });

  await Book.create({
    title: 'Freakonomics',
    description: 'Freakonomics is a groundbreaking collaboration between Levitt and Stephen J. Dubner, an award-winning author and journalist. They set out to explore the inner workings of a crack gang, the truth about real estate agents, the secrets of the Ku Klux Klan, and much more.',
    status: 'Status pending',
    email: 'mikec@gmail.com'
  });

  console.log("Books has been saved");
  mongoose.disconnect();
}

bookData();