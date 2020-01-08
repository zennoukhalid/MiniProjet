const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(cors());
app.use(express.json());


const server = 'localhost:27017';
const database = 'Ecole';
mongoose.connect(`mongodb://${server}/${database}`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connection successful'))
    .catch((err) => console.log('Database connection error'));

/****Routes***/

//etudiants=>localhost:3006/api/etudiants=>la route etudiant.js
const etudiantsRouter = require('./routes/etudiant');

app.use('/api/etudiants', etudiantsRouter);

//profs=>localhost:3006/api/etudiants=>la route prof.js
const profsRouter = require('./routes/prof');

app.use('/api/profs', profsRouter);

//filieres
const filieresRouter = require('./routes/filiere');

app.use('/api/filieres', filieresRouter);

//admin=> 
const adminRouter = require('./routes/admin');

app.use('/api/admin', adminRouter);

/*********  Port 3006 ********** */
const port = process.env.PORT || 3006
app.listen(port, () => console.log(`app running on ${port} port`))