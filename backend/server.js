import express from 'express'
import { products } from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/', (req, res) => {
    res.send('server is running')
})
const port = process.env.PORT || 5000

app.listen(port, () => { console.log(`server running on port ${port}`) })