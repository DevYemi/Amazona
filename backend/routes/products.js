import express from 'express'
const routes = express.Router();
import { products } from '../data.js';

// @route   Get /api/products
// @desc    Get all the products
// @access  Public
routes.get('/', (req, res) => {
    res.send(products)
})

// @route   Get /api/products/:id
// @desc    Get a specific product
// @access  Public
routes.get('/:id', (req, res) => {
    const product = products.find(x => x._id === Number(req.params.id));
    if (!product) res.status(404).send({ message: 'Product Not Found' });
    res.send(product);
})

export default routes