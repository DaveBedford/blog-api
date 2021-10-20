const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;