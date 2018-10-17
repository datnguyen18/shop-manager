const express = require('express');
const router = express.Router();
const Order_Item = require('../models/').Order_Items;
const Order = require('../models').Order;

router.post('/',(req,res) => {
  Order_Item.create(req.body)
    .then(order_item => {
      res.status(200).json({
        order_item
      })
    })
})

module.exports = router;