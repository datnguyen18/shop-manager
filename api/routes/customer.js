const express = require('express');
const router = express.Router();
const Customer = require('../models/customer')
const Order = require('../models/order')
router.post('/', (req, res) => {
  Customer.create(req.body)
    .then(customer => {
      res.status(200).json({
        customer
      })
    })
})

router.get('/', (req,res) => {
  Customer.findAll({include:[Order]}).then(customers => {
    res.status(200).json({
      customers
    })
  })
})
router.get('/:id', (req,res) => {
  Customer.find({
    where: {
      id: req.params.id
    },
    include:[Order]
}).then(customer => {
    res.status(200).json({
      customer
    })
  })
})
router.delete('/:id', (req,res) => {
  Customer.find({where:{id:req.params.id}}).then(customer => {
    customer.destroy();
  }).then(() => {
    res.status(200).json({message: "delete success"})
  })
})

router.patch('/:id', (req,res) => {
  Customer.find({where:{id:req.params.id}}).then(customer => {
    customer.update(req.body)
  }).then(() => {
    res.status(200).json({message:"update success"})
  })
})
module.exports = router;