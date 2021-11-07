import productRoute from '../routes/productRoute.js'
import userRoute from '../routes/userRoute.js'
import express from 'express'
export default function initializeRoutes(app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use((err, req, res, next) => {
        res.status(500).send({ message: err.message })
    })
    app.use('/api/products', productRoute);
    app.use('/api/users', userRoute)
}