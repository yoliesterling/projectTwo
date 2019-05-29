var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);