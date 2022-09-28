const e = require('express');
const mongoose = require('mongoose');
const usersModel = require('../models/usersModel')

const loginController = {};

loginController.checkUser = (req, res, next) => {
    const { userNameInput, passwordInput } = req.body;
    usersModel.Users.findOne({username: userNameInput, password : passwordInput})
        if (err) {
            return res.alert("Login Invalid");
        }
        res.locals.userName = data;
        console.log('correct username input');
        next();
}
module.exports = loginController;
