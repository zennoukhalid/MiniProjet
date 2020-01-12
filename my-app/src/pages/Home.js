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
import AddProf from './AddProf'
import EditProf from './EditProf'
import Prof from './Prof'
import NotFonwd from './NotFonwd'
import ChartAccueil from '../components/ChartAccueil'
import ChartSeulFiliere from '../components/ChartSeulFiliere'




export default class Home extends Component {
    render() {
        return (

            <div className="col-md-10">

                <Router>

                    <NavBar signout={this.props.signout} />

                    <Switch>
                        <Route path="/" exact component={ChartAccueil} />

                        <Route path="/Etudiant" exact component={Etudiant} />
                        <Route path="/Etudiant/:filiere" exact component={EtudiantFiliere} />
                        <Route path="/chart/:filiere" exact component={ChartSeulFiliere} />


                        <Route path="/Prof" exact component={Prof} />

                        <Route path="/AddEtudiant" exact component={AddEtudiant} />
                        <Route path="/EditEtudiant/:id" exact component={EditEtudiant} />

                        <Route path="/AddProf" exact component={AddProf} />
                        <Route path="/EditProf/:id" exact component={EditProf} />

                        <Route path="/Filiere" exact component={Filiere} />
                        <Route path="/AddFiliere" exact component={AddFiliere} />
                        <Route path="/EditFiliere/:id" exact component={EditFiliere} />

                        <Route path="*" component={NotFonwd} />

                    </Switch>

                </Router>

            </div >



        )
    }
}