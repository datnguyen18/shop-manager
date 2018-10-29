const express = require('express');
const router = express.Router();
const Order_Item = require('../models/order_items')
const Order = require('../models/order')

router.post('/',(req,res) => {
  Order_Item.create(req.body)
    .then(order_item => {
      res.status(200).json({
        order_item
      })
    })
})

module.exports = router;