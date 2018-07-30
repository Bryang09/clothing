const express = require('express');
const router = express.Router();

const Shirts = require('../models/Clothing/Shirts/GuysShirt');
const Pants = require('../models/Clothing/Pants/GuysPants');
const Shoes = require('../models/Clothing/Shoes/GuysShoes');

// Shirts
router.get('/shirts', (req, res) => {
  Shirts.find()
    .then(items => res.json(items))
})

router.get('/shirts/:id', (req, res) => {
  Shirts.findById(req.params.id)
    .then(shirt => {
      if (!shirt) { return res.status(404).end(); }
      return res.status(200).json(shirt)
    })
    .catch(err => console.log(err))
})

router.post('/shirts', (req, res) => {
  const newItem = new Shirts({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    src: req.body.src
  });
  newItem.save().then(item => res.json(item))
})

// Pants



router.get("/pants", (req, res) => {
  Pants.find()
    .then(pants => res.json(pants))
})

router.get('/pants/:id', (req, res) => {
  Pants.findById(req.params.id)
    .then(pant => {
      if (!pant) { return res.status(404).end(); }
      return res.status(200).json(pant)
    })
    .catch(err => console.log(err))
})

router.post('/pants', (req, res) => {
  const newPants = new Pants({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    src: req.body.src
  })
  newPants.save().then(pants => res.json(pants))
})

// Shoes 

router.get("/shoes", (req, res) => {
  Shoes.find()
    .then(shoes => res.json(shoes))
})

router.get('/shoes/:id', (req, res) => {
  Shoes.findById(req.params.id)
    .then(shoe => {
      if (!shoe) { return res.status(404).end(); }
      return res.status(200).json(shoe)
    })
    .catch(err => console.log(err))
})

router.post("/shoes", (req, res) => {
  const newShoes = new Shoes({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    src: req.body.src
  })
  newShoes.save().then(shoes => res.json(shoes))
})



module.exports = router;