const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GuysPantsSchema = new Schema({


  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }



})

module.exports = GuysPants = mongoose.model('guys_pants', GuysPantsSchema);