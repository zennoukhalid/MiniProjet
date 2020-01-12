import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './NavBar.css'
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'

export default class NavBar extends Component {

    render() {

        return (
            <div className="container left">
                <nav className="navbar navbar-expand-md bg-primary" >
                    <div className="navbar-nav">
                        <div className="col-lg-3">
                            <Link to="/" style={{ color: 'white' }} className="btn btn-primary">Accueil</Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Etudiant" style={{ color: 'white' }} className="btn btn-primary">Etudiants</Link>
                        </div>

                        <div className="col-lg-3">
                            <Link to="/Prof" style={{ color: 'white' }} className="btn btn-primary">Profs</Link>
                        </div>

                        <div className="col-lg-3">
                            <Link to="/Filiere" style={{ color: 'white' }} className="btn btn-primary">Filieres</Link></div>

                    </div>
                    <div className="col-md-9 ">
                        <input type="button"
                            value="Déconnecter"
                            className="btn btn-primary btn-sm"
                            onClick={this.props.signout} />
                    </div>

                </nav>
            </div>
     

        )
    }
}