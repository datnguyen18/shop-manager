const express = require('express');
const router = express.Router();
const Category = require('../models').Category;

router.post('/',(req, res) => {
    Category.create(req.body).then(category => {
        res.status(200).json({category})
    })
})

module.exports = router;