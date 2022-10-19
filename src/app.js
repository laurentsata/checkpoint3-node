require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const api = require('./api');
const { notFound, errorHandler } = require('./middlewares');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use('/api', api);

app.use(notFound);
app.use(errorHandler);

const port = process.env.APP_PORT ?? 8000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite albums !!!");
};

app.get('/', welcome);

app.get("/api/albums", albums.getAlbums);
app.get("/api/albums/:id", albums.getAlbumById);
app.post("/api/albums", albums.postAlbum);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }

module.exports = app;
