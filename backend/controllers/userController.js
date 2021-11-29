const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({
            message: 'User already exists',
        });
    }
    const user = await User.create({ name, email, password, pic });
    if (user) {
        return res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
        });
    } else {
        return res.status(400).json({
            message: 'User not created',
        });
    }
});
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
module.exports = { registerUser, authUser };
