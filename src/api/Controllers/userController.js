const mongoose = require('mongoose');
const userModel = require('../Models/userModel');
const User = mongoose.model('User');

exports.list_all_users = (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Error Server."});
        } else {
            res.status(200);
            res.json(users);
        }
    })
};

exports.create_a_user = (req, res) => {
    let new_user = new User(req.body);
    new_user.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json(error);
        }else {
            res.status(200);
            res.json(user);
        }
    })
};
