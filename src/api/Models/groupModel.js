const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groupSchema = new Schema({
    name: {
        type: String,
        required: "The name is required."
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Group', groupSchema);