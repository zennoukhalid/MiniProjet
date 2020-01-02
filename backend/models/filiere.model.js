const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const filiereSchema = new Schema({
    nom_filiere: { 
      type: String, 
      required:true,
      uppercase:true,
      unique:true
    },
    description: { 
      type: String,
      unique:false
    }
    
}, 
{
  timestamps: true,
});

const Filiere = mongoose.model('Filiere', filiereSchema);

module.exports = Filiere;