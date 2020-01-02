const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantSchema = new Schema({
    cne:{ 
      type: String, 
      required: true, 
      unique:true
    },
    cin:{ 
      type: String, 
      required: true, 
      unique:true
    },
    nom:{ 
      type: String, 
      required: true, 
      unique:false
    },
    prenom:{ 
      type: String, 
      required: true, 
      unique:false
    },
    adresse:{ 
      type: String, 
      required: true,
      unique:false
    },
    
    date_naissance:{
      type: Date, 
      required: true,
      unique:false
    },
   sexe:{ 
      type: String, 
      required: true,
      unique:false
    },
  
    filiere:{ type:String, unique:false,required: true  }



}, 
{
  timestamps: true,
});

const Etudiant = mongoose.model('Etudiant', etudiantSchema);

module.exports = Etudiant;