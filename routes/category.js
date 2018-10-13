const express = require('express');
const router = express.Router();
const Category = require('../models').Category;

router.post('/',(req, res) => {
    Category.create(req.body).then(category => {
        res.status(200).json({category})
    })
})

router.get('/',(req, res) => {
    Category.findAll().then(categories=> {
        res.status(200).json({categories})
    })
})

module.exports = router;