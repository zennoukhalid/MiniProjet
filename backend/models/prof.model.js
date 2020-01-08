const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profSchema = new Schema({

    nom: {
        type: String,
        required: true,
        unique: false
    },
    prenom: {
        type: String,
        required: true,
        unique: false
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    cin: {
        type: String,
        required: true,
        unique: true
    },
    filiere: { type: String, unique: false, required: true },
    date_naissance: {
        type: Date,
        required: true,
        unique: false
    },
    adresse: {
        type: String,
        required: true,
        unique: false
    },

    sexe: {
        type: String,
        required: true,
        unique: false
    },





},
    {
        timestamps: true,
    });

const Prof = mongoose.model('prof', profSchema);

module.exports = Prof;