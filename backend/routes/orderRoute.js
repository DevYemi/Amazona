import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import isAuth from '../middleware/isAuth.js';
import Order from '../models/OrderModel.js';

const routes = express.Router();

// @route   post /api/orders
// @desc    create a new order in db
// @access  Private
routes.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) return res.status(400).send({ message: "Cart is empty" });
    const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id
    })
    const createdOrder = await order.save();
    return res.send({ message: 'New Order Created', order: createdOrder });
}))


export default routes