import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class EtudiantF extends Component {
    render() {
        const etudiant = this.props.etudiants.filter(etudiant=>etudiant.filiere===this.props.lien).map
        (etudiant=>(


            <tr key={etudiant._id}>
                <td>{etudiant.nom} {etudiant.prenom}</td>
                <td>{etudiant.cne}</td>
                <td>{etudiant.adresse}</td>
                <td>{etudiant.sexe}</td>
                <td>
                    <Link to={"/EditEtudiant/" + etudiant._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                
                    &nbsp;&nbsp;
                    <button className="btn btn-outline-danger btn-sx" onClick={() => { this.props.deleteEtudiant(etudiant._id) }} ><i className="fa fa-trash-o" ></i></button>
                </td>
               
            </tr>


        ))
        return (
            <div>
                <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                                <th>Nom & Prenom</th>
                                <th>CNE</th>
                                <th>Adresse</th>
                                <th>sexe</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {etudiant}
                        </tbody>
                    </table>            
            </div>
        )
    }
}
