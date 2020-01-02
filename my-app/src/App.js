import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Etudiant from './pages/Etudiant'
import EtudiantFiliere from './pages/EtudiantFiliere'
import AddEtudiant from './pages/AddEtudiant'
import EditEtudiant from './pages/EditEtudiant'
import Filiere from './pages/Filiere'
import AddFiliere from './pages/AddFiliere'
import EditFiliere from './pages/EditFiliere'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'






export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/Etudiant/" exact component={Etudiant} />
            <Route path="/Etudiant/:filiere" exact component={EtudiantFiliere} />
         
            <Route path="/AddEtudiant" exact component={AddEtudiant} />
            <Route path="/EditEtudiant/:id" exact component={EditEtudiant} />

            <Route path="/Filiere" exact component={Filiere} />
            <Route path="/AddFiliere" exact component={AddFiliere} />
            <Route path="/EditFiliere/:id" exact component={EditFiliere} />

        


          </Switch>

        </Router>
      </div>
    )
  }
}
