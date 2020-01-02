const router= require('express').Router();
const mongoose = require('mongoose');

//require the model: etudiant.model.js
let etudiants = require('../models/etudiant.model');


/* localhost:3006/api/etudiants/=>> affiche liste des etudiants (methode find)sinon affiche erreur */
router.route('/').get(async(req,res)=>{
        await etudiants.find()
    .then(etudiants=>res.json(etudiants))
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/filiere/:filiere').get(async(req,res)=>{
  await etudiants.find({filiere:req.params.filiere})
.then(etudiants=>res.json(etudiants))
.catch(err => res.status(400).json('Error: '+err));
})



/* Ajouter : localhost:3006/api/etudiants/ajouter */
router.route('/ajouter').post((req,res)=>{
    
    const {cne, cin, nom , prenom , adresse , date_naissance , sexe, filiere} = req.body;
    const newEtudiant= new etudiants({
        cne,
        cin,
        nom,
        prenom,
        adresse, 
        date_naissance,
        sexe,
       
        filiere
    });

     newEtudiant.save()
    .then(()=>res.json('etudiant est ajouté'))
    .catch(err => res.status(400).json('Error: '+err));
})



router.route('/:id').get((req, res) => {
    etudiants.findById(req.params.id)
      .then(etudiants => res.json(etudiants))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  
/* supprimer : localhost:3006/api/etudiants */
router.route('/:id').delete((req, res) => {
       etudiants.findByIdAndDelete(req.params.id)
      .then(() => res.json('etudiant supprimé.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

/* Modifier : localhost:3006/api/etudiants/modifier */
router.route('/modifier/:id').post((req, res) => {
    etudiants.findById(req.params.id)
      .then(async etudiant => {
        etudiant.cne = req.body.cne;
        etudiant.cin = req.body.cin;
        etudiant.nom = req.body.nom;
        etudiant.prenom = req.body.prenom;
        etudiant.adresse = req.body.adresse;
        etudiant.sexe = req.body.sexe;
        etudiant.date_naissance = req.body.date_naissance;
        etudiant.tel = req.body.tel;
        etudiant.filiere=req.body.filiere;;


        
        etudiant.save()
          .then(() => res.json('etudiant modifié!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});





module.exports=router;