const express = require('express');
const Product = require('../models/Product')
const router = express.Router();

const allProducts = require('../models/productsInfo')

// body parser middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES
// request all products
router.get('/', async (req, res) => {
    try {
        //const product = await Product.find();
        res.status(200).json(allProducts);
    }
    catch (err) {
        res.status(404).json({ MSG: err });
    }
});

// request specific product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch (err) {
        res.status(404).json({ MSG: err });
    }
});

// create a product
router.post('/', async (req, res) => {
    const product = new product({
        name: req.body.name,
        body: req.body.body
    });
    try {
        product.save()
        res.status(200).send('POSTED')
    }
    catch (err) {
        res.status(404).json({ MSG: err })
    }

});

// delete specific product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.remove({ _id: req.params.id })
        res.status(200).json(product);
    }
    catch (err) {
        res.status(404).json({ MSG: err });
    }
});


// Update specific product
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.update({ _id: req.params.id },
            {
                $set: {
                    body: req.body.body
                }
            }
        )
        res.status(200).json(product);
    }
    catch (err) {
        res.status(404).json({ MSG: err });
    }
});

module.exports = router;