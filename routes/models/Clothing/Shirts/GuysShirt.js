const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ShirtSchema = new Schema({


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

module.exports = Shirt = mongoose.model('guys_shirts', ShirtSchema);