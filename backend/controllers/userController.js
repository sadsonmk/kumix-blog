const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// generate token
const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: '3d'
    });
};
// login user

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = generateToken(user._id);
        res.status(200).json({ email, token,  id: user._id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

};

// signup user
const userSignup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);
        const token = generateToken(user._id);
        res.status(201).json({ email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { userLogin, userSignup };