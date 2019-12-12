const mongoose = require('mongoose');
const userModel = require('../Models/userModel');
const User = mongoose.model('User');

// Obtention la liste des utilisateurs
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
//Création des utilisateurs
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

//Obtention d'un utilisateur par son ID
exports.create_a_user = (req, res) => {
    req.body.affected_group = req.params.affected_group;
    req.body.affected_user = req.params.affected_user;
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

//Modification d'un utilisateur trouvé par son ID
exports.update_a_user = (req, res) => {
    User.findOneAndUpdate({_id: req.params.user_id}, req.body, {new: true}, (error, user) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Error serveur"});
        }
        else {
            res.status(200);
            res.json({user, message:"Modification effectuée !"});
        }
    })
};

// Suppression d'un utilisateur trouvé par son ID
exports.delete_a_user = (req, res) => {
    User.deleteOne({_id: req.params.user_id}, (error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Error server"});
        }
        else {
            res.status(200);
            res.json({message: "Le Groupe : "+ req.params.user_id + "a bien été supprimé !"});
        }
    })
};