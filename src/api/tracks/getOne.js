const getTrackById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from track where id = ?", [id])
    .then(([track]) => {
      if ([0] != null) {
        res.json(track[0]);
      } else {
        res.status(404).send("Not Found, oh my god !!!"); // *** status 404 si non trouvé
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database"); // *** status 500 si erreur
    });
};


module.exports =  {
  getTrackById,
};
