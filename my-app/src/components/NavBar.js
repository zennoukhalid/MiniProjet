import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'

export default class NavBar extends Component {

    render() {

        return (
            <div className="container left">
                <nav className="navbar navbar-expand-md bg-primary ">
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
                    <div className="col-md-12 ">
                        <input type="button"
                            value="Déconnecter"
                            className="btn btn-primary btn-sm"
                            onClick={this.props.signout} />
                    </div>

                </nav>
            </div>
            // <ul className="navbar">
            //     <div className="row ">
            //         <li className="col-lg-5"></li>
            //         <li className="col-lg-5"><Link to="/Etudiant">Etudiants</Link></li>

            //     </div>
            //     <div className="row ">

            //         <li className="col-md-4">
            //             <input type="button" value="Deconnecter" className="btn btn-primary btn-sm"></input>
            //         </li>
            //     </div>


            // </ul>


        )
    }
}