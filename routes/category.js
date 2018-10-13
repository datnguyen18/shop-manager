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

router.get('/:id',(req,res) => {
    Category.find({where: {id: req.params.id}}).then(category => {
        if(!category){
            return res.status(404).json({error: "Not found"})
        }
        res.status(200).json({category})
    })
})
module.exports = router;