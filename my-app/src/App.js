import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Etudiant from './pages/Etudaint'
import Prof from './pages/Prof'
import AddProf from './pages/AddProf'
import AddEtudiant from './pages/AddEtudiant'
import Filiere from './pages/Filiere'
import AddFiliere from './pages/AddFiliere'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddAdmin from './pages/AddAdmin'
import EditAdmine from './pages/EditAdmine'
import EditEtudiant from './pages/EditEtudiant'
import EditProf from './pages/EditProf'
import EditFiliere from './pages/EditFiliere'



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/Etudiant" component={Etudiant} />
            <Route path="/AddEtudiant" component={AddEtudiant} />
            <Route path="/EditEtudiant" component={EditEtudiant} />

            <Route path="/Prof" exact component={Prof} />
            <Route path="/AddProf" exact component={AddProf} />
            <Route path="/EditProf" exact component={EditProf} />

            <Route path="/Filiere" exact component={Filiere} />
            <Route path="/AddFiliere" exact component={AddFiliere} />
            <Route path="/EditFiliere" exact component={EditFiliere} />


            <Route path="/AddAdmin" exact component={AddAdmin} />
            <Route path="/EditAdmine" exact component={EditAdmine} />


          </Switch>

        </Router>
      </div>
    )
  }
}
