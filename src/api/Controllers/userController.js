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

exports.get_a_user = (req, res) => {
    User.find(req.params.user_id, (error, user) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur"});
        }
        else {
            res.status(200);
            res.json(user);
        }
    })
};

exports.create_a_user = (req, res) => {
    req.body.user_id = req.params;
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

exports.update_a_user = (req, res) => {
    User.findOneAndUpdate({_id: req.params.user_id}, req.body, {new: true}, (error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Error serveur"});
        }
        else {
            res.status(200);
            res.json({message: "Updated"});
        }
    })
};

exports.delete_a_user = (req, res) => {
    User.deleteOne({_id: req.params.user_id}, (error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Error server"});
        }
        else {
            res.status(200);
            res.json({message: "Deleted"});
        }
    })
};