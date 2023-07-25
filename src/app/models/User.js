const mongoose = require('mongoose');
// const { TRUE } = require('node-sass');

const Schema = mongoose.Schema;

const User = new Schema({
    username: {type: String, maxLength: 255},
    email: {type: String, maxLength: 255},
    ngay_sinh: {type: String,maxLength: 255},
    password: {type: String, maxLength: 255},
    so_dien_thoai: {type: Number, maxLength: 255},
    gioi_tinh: {type: String, maxLength: 255},
},{
    timestamps: true,
});




module.exports = mongoose.model('users', User);