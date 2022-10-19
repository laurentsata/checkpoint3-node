const database = require('../database');

module.exports = (req, res) => {
  //res.send("Post route is working 🎉");
  const { title, youtube_url, id_album } = req.body; //extrait toutes les variables pour envoyer que les informations que nous souhaitons INSERER
  //***utilise database.query pour écrire la requête INSERT ***
  database
    .query(
      'INSERT INTO track(title, youtube_url, id_album) VALUES (?, ?, ?)', //**les ? seront remplacés par le module mysql2 avant que la requête ne soit envoyée à la base de données**
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      res.location(`/api/track/${result.insertId}`).sendStatus('201 created'); //***https://www.restapitutorial.com/lessons/httpmethods.html ***
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the album');
    });
};