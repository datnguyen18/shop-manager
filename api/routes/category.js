const express = require('express');
const router = express.Router();
const Category = require('../models/category')
const Product = require('../models/product')
router.post('/',(req, res) => {
    Category.create(req.body).then(category => {
        res.status(200).json({category})
    })
})

router.get('/',(req, res) => {
    Category.findAll({
        include: [Product]
    }).then(categories=> {
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

router.delete('/:id',(req,res) => {
    Category.find({where: {id: req.params.id}}).then(category =>{
        category.destroy();
    }).then(() => {
        res.status(200).json({
            message: "deleted successfully"
        })
    })
})
router.patch('/:id', (req,res) => {
    Category.find({where: {id: req.params.id}}).then(category =>{
        category.update(req.body)
    }).then(() => {
        res.status(200).json({
            message: "updated successfully"
        })
    })
})
module.exports = router;