var mongoose = require('mongoose');

var appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    googleID: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);