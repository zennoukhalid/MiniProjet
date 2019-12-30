import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'

export default class NavBar extends Component {
    render() {
        function addAdmine(e) {
            window.location = '/AddAdmin';
            console.log('ajouter un admin')
        }
        function EditAdmine(e) {
            window.location = '/EditAdmine';
            console.log('Modifier un admin')
        }
        return (


            <ul className="navbar">
                <div className="row ">
                    <li className="col-lg-3"><Link to="/" >Accueil </Link></li>
                    <li className="col-lg-3"><Link to="/Etudiant">Etudiants</Link></li>
                    <li className="col-lg-3"><Link to="/Prof">Professeurs</Link></li>
                    <li className="col-lg-3"><Link to="/Filiere">Filieres</Link></li>

                </div>
                <div className="row ">
                    <li className="col-md-4">
                        <input type="button" value="Ajouter Admin" className="btn btn-secondary" onClick={addAdmine}></input>
                    </li>
                    <li className="col-md-4">
                        <input type="button" value="Modifier Admin" className="btn btn-secondary" onClick={EditAdmine}></input>
                    </li>
                    <li className="col-md-4">
                        <input type="button" value="Deconnecter" className="btn btn-secondary"></input>
                    </li>
                </div>


            </ul>


        )
    }
}