import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { users } from '../data.js';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/generateToken.js';

const routes = express.Router();

// @route   Get /api/users
// @desc    Get 
// @access  Public
routes.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(users);
    return res.send({ createdUsers });
}))

// @route   Get /api/users
// @desc    Get all registerted users
// @access  Public
routes.get('/', expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    return res.send(users);
}))

// @route   Post /api/users/signin
// @desc    sign in a user
// @access  Public
routes.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(404).send({ message: "USER NOT FOUND" })
    if (!bcrypt.compareSync(req.body.password, user.password)) return res.status(401).send({ message: "INVALID EMAIL OR PASSWORD" })
    // else
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
    })
}))

// @route   Post /api/users/signup
// @desc    register a new user
// @access  Public
routes.post('/signup', expressAsyncHandler(async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })

    const createdUser = await newUser.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser)
    })
}))





export default routes