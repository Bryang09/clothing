const express = require('express');
const router = express.Router();

const GirlsShirts = require('../models/Clothing/Shirts/GirlsShirt');
const GirlsBottoms = require('../models/Clothing/Pants/Girls_Bottoms');
const GirlsShoes = require('../models/Clothing/Shoes/GirlsShoes');

router.get('/shirts', (req, res) => {
  GirlsShirts.find()
    .then(items => res.json(items))
})

router.get('/shirts/:id', (req, res) => {
  GirlsShirts.findById(req.params.id)
    .then(shirts => {
      if (!shirts) { return res.status(404).end(); }
      return res.status(200).json(shirts)
    })
    .catch(err => console.log(err))
})

router.post('/shirts', (req, res) => {
  const newItem = new GirlsShirts({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    src: req.body.src
  });
  newItem.save().then(item => res.json(item))
})

router.get('/bottoms', (req, res) => {
  GirlsBottoms.find()
    .then(bottoms => res.json(bottoms))
})

router.get('/bottoms/:id', (req, res) => {
  GirlsBottoms.findById(req.params.id)
    .then(bottom => {
      if (!bottom) { return res.status(404).end(); }
      return res.status(200).json(bottom)
    })
    .catch(err => console.log(err))
})

router.post('/bottoms', (req, res) => {
  const newItemg = new GirlsBottoms({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    src: req.body.src
  });
  newItemg.save().then(itemg => res.json(itemg)).catch(err => console.log(err))
})

router.get('/shoes', (req, res) => {
  GirlsShoes.find()
    .then(shoe => res.json(shoe))
})

router.get('/shoes/:id', (req, res) => {
  GirlsShoes.findById(req.params.id)
    .then(shoe => {
      if (!shoe) { return res.status(404).end(); }
      return res.status(200).json(shoe)
    })
    .catch(err => console.log(err))
})

router.post('/shoes', (req, res) => {
  const newShoe = new GirlsShoes({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    src: req.body.src
  });
  newShoe.save().then(shoe => res.json(shoe))
})

module.exports = router;