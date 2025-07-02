const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const login = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) return { error: 'User not found', status: 404 };

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return { error: 'Invalid password', status: 401 };

        const token = jwt.sign({ email }, process.env.SECRET_KEY);
        return { user, token };
    } catch (error) {
        return { error: 'Error logging in', status: 500 };
    }
};

const register = async (name, email, password) => {
    try {
        const userExist = await User.findOne({ email });
        if (userExist) return { error: 'User Already Exists', status: 401 };

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ email }, process.env.SECRET_KEY);
        return { user, token };
    } catch (error) {
        return { error: 'Error creating user', status: 500 };
    }
};

const verify = async (token) => {
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded)
        const user = User.findOne({email:decoded.email})
        if(user){
            return { valid: true, decoded };
        }
        return { valid: false };
    } catch (err) {
        return { valid: false, error: 'Invalid or expired token' };
    }
};

module.exports = { login, register, verify };
 