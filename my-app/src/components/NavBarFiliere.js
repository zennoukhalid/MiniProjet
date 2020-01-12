import React, { Component } from 'react'
import axios from 'axios';
import { NavLink,Link } from 'react-router-dom';

export default class NavBarFiliere extends Component {
    state={
        filieres:[]
    }
    componentDidMount() {
        axios.get('http://localhost:3006/api/filieres/')
            .then(res => {
                    this.setState({
                        filieres: res.data.map(filiere => filiere),
                    })
                
               

            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        const filiere = this.state.filieres.map((filiere) =>(
                
                    <li className="nav-item" key={filiere._id}>
                        <NavLink className="nav-link" to= {"/Etudiant/"+filiere.nom_filiere}>{filiere.nom_filiere}</NavLink>

                    </li>
                
        ));
        return (
            <div>
                <ul className="nav nav-tabs">
            
                    <li className="nav-item">
                                <Link className="nav-link" to= {"/Etudiant/"}>Tous</Link>
                    </li>
                    {filiere}

                </ul>
            </div>
        )
    }
}
