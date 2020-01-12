const router = require('express').Router();
//require the model: admin.model.js
let admin = require('../models/admin.model');


router.route('/').get((req, res) => {
    admin.find()
        .then(admin => res.json(admin))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/auth').post((req, res) => {
    const email = req.body.email;
    admin.find({ email: email }).then(admin => res.json(admin)).catch(err => res.json("Error finding !" + email + " :" + err));
});

/*localhost:3006/api/admin/ajouter */
router.route('/ajouter').post(async (req, res) => {
    const { email, password } = req.body;
    const newAdmin = new admin({
        email,

        password,
       

    });
    newAdmin.save()
        .then(() => res.json('admin est ajouté'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;