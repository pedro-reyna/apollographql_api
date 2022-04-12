//Import
const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({

    prenom : {
        type : String,
        required : true
    },
    nom : {
        type : String,
        required : true
    },
    courriel : {
        type : String,
        required : true
    },
    telephone : {
        type : String,
        required : true
    }
});

const Contact = mongoose.model('contact', ContactSchema);
module.exports = Contact;
