const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  username: {
    type: String,
    required: true,
  },


},
  {
    timestamps: true,
  });

/*****password */
// adminSchema.pre('save', function (next) {
//   var hash = bcrypt.hashSync(this.password, 8);

//   this.password = hash;
//   next();
// })



const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
