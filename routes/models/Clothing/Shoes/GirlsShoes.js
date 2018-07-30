const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GirlsShoeSchema = new Schema({

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

module.exports = GirlsShoes = mongoose.model("girl_shoes", GirlsShoeSchema)