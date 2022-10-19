const database = require('../database.js');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query('select * from track where id_album = ?', [id])
    .then(([album]) => {
      if (album[0] != null) {
        res.json(album);
      } else {
        res.status(404).send('Not Found, oh my god !!!'); // *** status 404 si non trouvé
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database'); // *** status 500 si erreur
    });
};

