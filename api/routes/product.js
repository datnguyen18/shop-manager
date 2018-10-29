const express = require('express');
const router = express.Router();
const Product = require('../models').Product;

router.post('/', (req, res) => {
  Product.create(req.body).then(product => {
    res.status(200).json({
      product
    })
  })
})

router.get('/', (req, res) => {
  Product.findAll().then(products => {
    res.status(200).json({
      products
    })
  })
})
router.get('/:id', (req, res) => {
  Product.find({
    where: {
      id: req.params.id
    }
  }).then(product => {
    res.status(200).json({
      product
    })
  })
})
router.patch(':/id', (req, res) => {
  Product.find({
      where: {
        id: req.params.id
      }
    })
    .then(product => {
      product.update(req.body);
    })
    .then(() => {
      res.status(200).json({message: "delete succeeded"})
    })
})
router.delete(':/id', (req, res) => {
  Product.find({
      where: {
        id: req.params.id
      }
    })
    .then(product => {
      product.destroy();
    })
    .then(() => {
      res.status(200).json({message: "delete succeeded"})
    })
})


module.exports = router;