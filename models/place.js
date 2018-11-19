const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

// associate the model with mongoose
const Place = mongoose.model('place', PlaceSchema);

// export the model
module.exports = Place;