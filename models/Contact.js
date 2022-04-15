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
    },
    ville : {
        type : String,
        required : true
    },
    province : {
        type : String,
        required : true
    },
    codePostal : {
        type : String,
        required : true
    },
    pays : {
        type : String,
        required : true
    },
    commentaires1 : {
        type : String
    },
    commentaires2 : {
        type : String
    }
});

const Contact = mongoose.model('contact', ContactSchema);
module.exports = Contact;
