const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// static method to signup user
userSchema.statics.signup = async function(email, password) {

    // validation checks
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    if (!validator.isEmail(email)) {
        throw new Error('Email is invalid');
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error('Password is weak');
    }

    const userExists = await this.findOne({ email });
    if (userExists) {
         throw new Error('Email already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hashedPassword });

    return user;

};

//static method to login user
userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
        throw new Error('Email and password are required');
    }
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw new Error('Incorrect password');
    }
    throw new Error('Email does not exist');
};

const User = mongoose.model('User', userSchema);
module.exports = User;