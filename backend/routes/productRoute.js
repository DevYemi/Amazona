import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import { products } from '../data.js';
import Product from '../models/ProductModel.js';


const routes = express.Router();

// @route   Get /api/products/seed
// @desc    create dummy product data
// @access  Public
routes.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(products);
    return res.send({ createdProducts })
}))
// @route   Get /api/products
// @desc    Get all the products
// @access  Public
routes.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    return res.send(products)
}))

// @route   Get /api/products/:id
// @desc    Get a specific product
// @access  Public
routes.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).send({ message: "PRODUCT NOT FOUND" })
    return res.send(product)
}))

export default routes