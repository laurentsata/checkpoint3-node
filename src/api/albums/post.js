const postAlbum = (req, res) => {
  //res.send("Post route is working 🎉");
  const { title, genre, picture, artist } = req.body; //extrait toutes les variables pour envoyer que les informations que nous souhaitons INSERER
  //***utilise database.query pour écrire la requête INSERT ***
  database
    .query(
      "INSERT INTO album(title, genre, picture, artist) VALUES (?, ?, ?, ?)", //**les ? seront remplacés par le module mysql2 avant que la requête ne soit envoyée à la base de données**
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      res.location(`/api/album/${result.insertId}`).sendStatus(201); //***https://www.restapitutorial.com/lessons/httpmethods.html ***
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the album");
    });
};


module.exports = (req, res) => {
  postAlbum,
};
