const router= require('express').Router();
//require the model: filiere.model.js
let filieres = require('../models/filiere.model');


/* localhost/3006/api/filieres/=>> affiche liste des filieres (methode find)sinon affiche erreur */
router.route('/').get(async(req,res)=>{
     await filieres.find()
    .then(filieres=>res.json(filieres))
    .catch(err => res.status(400).json('Error: '+err));
})

/* ajouter : localhost:3006/api/filieres/ajouter */
router.route('/ajouter').post((req,res)=>{
    
    const {nom_filiere,description}= req.body;
   
    const newFiliere=new filieres({
        nom_filiere,
        description,
        
    });

    newFiliere.save()
    .then(()=>res.json('filiere est ajouté'))
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/:id').get((req, res) => {
    filieres.findById(req.params.id)
      .then(filieres => res.json(filieres))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    filieres.findByIdAndDelete(req.params.id)
      .then(() => res.json('filiere supprimé.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

/* Modifier : localhost:3006/api/filieres/ajouter */
router.route('/modifier/:id').post((req, res) => {
    filieres.findById(req.params.id)
      .then(filiere => {
        filiere.nom_filiere = req.body.nom_filiere;
        filiere.description = req.body.description;

        
        filiere.save()
          .then(() => res.json('filiere modifié!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});
  

module.exports=router;