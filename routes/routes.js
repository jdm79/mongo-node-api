const PlacesController = require('../controllers/places_controller');

module.exports = app => {
  app.get('/api', PlacesController.greeting);
}