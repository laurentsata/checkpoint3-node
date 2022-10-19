const getAlbums = (req, res) => {
  database
    .query('select * from album')
    .then(([album]) => {
      res.json(album);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};


module.exports = (req, res) => {
  getAlbums,
};
