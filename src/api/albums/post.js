const database = require('../database');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  database
    .query(
      'INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)', //**les ? seront remplacés par le module mysql2 avant que la requête ne soit envoyée à la base de données**
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.location(`/api/albums/${result.insertId}`).sendStatus(201); //***https://www.restapitutorial.com/lessons/httpmethods.html ***
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the album');
    });
};
