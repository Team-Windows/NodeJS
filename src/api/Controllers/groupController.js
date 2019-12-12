const mongoose = require('mongoose');
const groupModel = require('../Models/groupModel');
const Group = mongoose.model('Group');

exports.list_all_groups = (req, res) => {
    Group.find({}, (error, groups) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Error Server."});
        } else {
            res.status(200);
            res.json(groups);
        }
    })
};

exports.create_a_group = (req, res) => {
    let new_group = new Group(req.body);
    new_group.save((error, group) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json(error);
        }else {
            res.status(200);
            res.json(group);
        }
    })
};
