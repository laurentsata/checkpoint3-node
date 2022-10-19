const database = require('../database');

module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;
  database
    .query(
      'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)', //**les ? seront remplacés par le module mysql2 avant que la requête ne soit envoyée à la base de données**
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      res.location(`/api/tracks/${result.insertId}`).sendStatus(201); //***https://www.restapitutorial.com/lessons/httpmethods.html ***
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the album');
    });
};
