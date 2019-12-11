const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    name: {
        type: String,
        required: "The name is required."
    } ,
    content:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);