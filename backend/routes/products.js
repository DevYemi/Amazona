import express from 'express'
const routes = express.Router();
import { products } from '../data.js';

routes.get('/', (req, res) => {
    res.send(products)
})
routes.get('/:id', (req, res) => {
    const product = products.find(x => x._id === Number(req.params.id));
    if (!product) res.status(404).send({ message: 'Product Not Found' });
    res.send(product);
})

export default routes