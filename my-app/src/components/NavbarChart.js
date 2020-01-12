import React, { Component } from 'react'
import axios from 'axios';
import { Link,NavLink } from 'react-router-dom';

export default class NavbarChart extends Component {
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
        const filiere = this.state.filieres.map(filiere =>{ 
                return (
                    <li className="nav-item" key={filiere._id}>
                        <NavLink className="nav-link" to= {"/chart/"+filiere.nom_filiere}>{filiere.nom_filiere}</NavLink>
                        
                    </li>
                ) 
        });
        return (
            <div>
                <ul className="nav nav-tabs">
            
                    <li className="nav-item">
                                <Link className="nav-link" to= {"/"}>Tous</Link>
                    </li>
                    
                    {filiere}

                </ul>
            </div>
        )
    }
}
