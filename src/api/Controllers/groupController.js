const mongoose = require('mongoose');
const groupModel = require('../Models/groupModel');
const Group = mongoose.model('Group');

// Obtention la liste des groupes
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

//Creation d'un groupe
exports.create_a_group = (req, res) => {
    let new_group = new Group(req.body);
    new_group.save((error, group) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json(error);
        } else {
            res.status(200);
            res.json(group);
        }
    })
};

//Obtention un groupe par sont ID
exports.get_a_group = (req, res) => {
    const {group_id} = req.params;
    Group.find({_id:group_id}).then(group => {
       if(group){
           res.status(200);
           res.json(group);
       } else {
           res.status(404);
           res.json({message : "Le Groupe n'existe pas !"})
       }
    }).catch(e => {
        res.status(500);
        console.log(e);
        res.json({message : "Error Server"})
    });

};

//Modification d'un groupe trouvé par son ID
exports.update_a_group = (req, res) => {
    const {group_id} = req.params;
    Group.findOneAndUpdate({_id:group_id}, req.body, {new:true},(error, group) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message:"Error Server."});
        }
        else{
            res.status(200);
            res.json({group, message:"Modification effectuée !"});
        }
    })
};

// Suppression d'un groupe trouvé par son ID
exports.delete_a_group = (req, res) => {
    const {group_id} = req.params;
    Group.deleteOne({_id:group_id}, function(error) {
        if(error){
            res.status(500);
            res.json({message: "Erreur Serveur"});
        }else{
            res.status(200);
            res.json("Le Groupe : " + group_id + "a bien été supprimé !");
        }
    });
};