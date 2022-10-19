const database = require('../database.js');

module.exports = (req, res) => {
  database
    .query('select * from track')
    .then(([track]) => {
      res.json(track);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

