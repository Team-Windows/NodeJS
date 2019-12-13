const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: "Who are you? The name is required."
    },
    date: {
        type: Date,
        default: Date.now
    },
    affected_user: {
        type: String,
    },
    affected_group: {
        type: String,
    },
    wish_list: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);