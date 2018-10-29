const express = require('express');
const router = express.Router();
const Order = require('../models').Order;
const Order_Item = require('../models').Order_Items;
const Customer = require('../models').Customer;
router.post('/', (req, res) => {
  Order.create(req.body).then(order => {
    res.status(200).json({
      order
    })
  })
})
router.get('/', (req, res) => {
  Order.findAll({include: [Order_Item]}).then(orders => {
    res.status(200).json({
      orders
    })
  })
})
router.get('/:id', (req, res) => {
  Order.find({
    where: {
      id: req.params.id
    },
  }).then(order => {
    res.status(200).json({
      order
    })
  })
})
router.patch('/:id', (req, res) => {
  Order.find({
    where: {
      id: req.params.id
    }
  }).then(order => {
    order.update(req.body)
  })
  .then(() => {
    res.status(200).json({
      message: "update succeeded"
    })
  })
})
router.delete('/:id', (req, res) => {
  Order.find({
    where: {
      id: req.params.id
    }
  }).then(order => {
    order.destroy();
  })
  .then(() => {
    res.status(200).json({
      message: "delete succeeded"
    })
  })
})
module.exports = router;