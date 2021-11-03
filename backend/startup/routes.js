import products from '../routes/products.js'
import express from 'express'
export default function initializeRoutes(app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/api/products', products);
}