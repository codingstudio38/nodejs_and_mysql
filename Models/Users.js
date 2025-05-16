const mongooseConnect = require('./../Config/MongooConnection');
const mongoosePaginate = require("mongoose-paginate-v2");
const jwt = require('jsonwebtoken');
const mongodb = require('mongodb');
const moment = require('moment-timezone');
const mongoose = require('mongoose');
const validator = require('validator');
const UsersSchema = new mongooseConnect.Schema({
    name: { type: String, required: true, trim: true, default: "auto generate name by mongo" },
    phone: { type: String, required: true, unique: true, trim: true, minlength: [10, "minimum 10 digit."], maxlength: [10, "maximum 10 digit."] },
    email: {
        type: String, required: true, unique: true, trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email is invalid');
            }
        }
    },
    photo: { type: String, required: false, trim: true, default: null },
    password: { type: String, required: true, minlength: [8, "minimum 8 character"] },
    wsstatus: { type: Number, required: false, default: 0 },
    tokens: [{
        token: {
            type: String, required: true
        }
    }],
    created_at: { type: Date, required: true, default: moment().tz(process.env.TIMEZONE).format('YYYY-MM-DD HH:mm:ss') },//new Date()
    updated_at: { type: Date, required: false, default: null },
});

const UsersModel = mongooseConnect.model('users', UsersSchema);
module.exports = UsersModel;