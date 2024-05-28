const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const authRequire = async (req, res, next) => {
    // aunthentication verification
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' });
    }
    const token = authorization.replace('Bearer ', '');

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(_id).select('_id');
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Authorization token invalid' });
    }
}

module.exports = authRequire;