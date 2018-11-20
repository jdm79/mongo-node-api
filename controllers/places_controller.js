const Place = require('../models/place');

module.exports = {
  greeting(req, res) {
    res.send({ hello: 'neptune' })
  },

  create(req, res) {
    const placeProps = req.body;
    
    Place.create(placeProps)
      .then(place => res.send(place));
  }
}