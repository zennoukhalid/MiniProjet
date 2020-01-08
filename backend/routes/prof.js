const router = require('express').Router();
const mongoose = require('mongoose');

//require the model: etudiant.model.js
let profs = require('../models/prof.model');


/* localhost:3006/api/profs/=>> affiche liste des profs (methode find)sinon affiche erreur */
router.route('/').get(async (req, res) => {
    await profs.find()
        .then(profs => res.json(profs))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/filiere/:filiere').get(async (req, res) => {
    await profs.find({ filiere: req.params.filiere })
        .then(profs => res.json(profs))
        .catch(err => res.status(400).json('Error: ' + err));
})



/* Ajouter : localhost:3006/api/profs/ajouter */
router.route('/ajouter').post((req, res) => {

    const { nom, prenom, phone, cin, filiere, date_naissance, adresse, sexe, } = req.body;
    const newProf = new profs({
        nom,
        prenom,
        phone,
        cin,
        filiere,
        date_naissance,
        adresse,
        sexe


    });

    newProf.save()
        .then(() => res.json('prof est ajouté'))
        .catch(err => res.status(400).json('Error: ' + err));
})



router.route('/:id').get((req, res) => {
    profs.findById(req.params.id)
        .then(profs => res.json(profs))
        .catch(err => res.status(400).json('Error: ' + err));
});


/* supprimer : localhost:3006/api/profs */
router.route('/:id').delete((req, res) => {
    profs.findByIdAndDelete(req.params.id)
        .then(() => res.json('profs supprimé.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* Modifier : localhost:3006/api/profs/modifier */
router.route('/modifier/:id').post((req, res) => {
    profs.findById(req.params.id)
        .then(async prof => {
            prof.phone = req.body.phone;
            prof.cin = req.body.cin;
            prof.nom = req.body.nom;
            prof.prenom = req.body.prenom;
            prof.adresse = req.body.adresse;
            prof.sexe = req.body.sexe;
            prof.date_naissance = req.body.date_naissance;
            prof.tel = req.body.tel;
            prof.filiere = req.body.filiere;;



            prof.save()
                .then(() => res.json('prof modifié!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;