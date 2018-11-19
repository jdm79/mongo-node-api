const PlacesController = require('../controllers/places_controller');

module.exports = app => {
  // basic response for now
  app.get('/api', PlacesController.greeting);
  // creates new place
  app.post('/api/places', PlacesController.create);
}