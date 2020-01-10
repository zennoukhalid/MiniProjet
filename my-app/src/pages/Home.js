import React, { Component } from 'react'
import Etudiant from './Etudiant'
import EtudiantFiliere from './EtudiantFiliere'
import AddEtudiant from './AddEtudiant'
import EditEtudiant from './EditEtudiant'
import Filiere from './Filiere'
import AddFiliere from './AddFiliere'
import EditFiliere from './EditFiliere'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Deux from '../components/deux'
import AddProf from './AddProf'
import EditProf from './EditProf'
import Prof from './Prof'
import NotFonwd from './NotFonwd'



export default class Home extends Component {
    render() {
        return (

            <div className="col-md-10">

                <Router>

                    <NavBar signout={this.props.signout} />

                    <Switch>
                        <Route path="/" exact component={Deux} />

                        <Route path="/Etudiant" component={Etudiant} />
                        <Route path="/Etudiant/:filiere" component={EtudiantFiliere} />

                        <Route path="/Prof" component={Prof} />

                        <Route path="/AddEtudiant" component={AddEtudiant} />
                        <Route path="/EditEtudiant/:id" component={EditEtudiant} />

                        <Route path="/AddProf" component={AddProf} />
                        <Route path="/EditProf/:id" component={EditProf} />

                        <Route path="/Filiere" component={Filiere} />
                        <Route path="/AddFiliere" component={AddFiliere} />
                        <Route path="/EditFiliere/:id" component={EditFiliere} />

                        <Route path="*" component={NotFonwd} />

                    </Switch>

                </Router>

            </div >



        )
    }
}