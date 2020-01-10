import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Etudiant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            etudiants: [],
            afficherinfo: false
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3006/api/etudiants/')
            .then(res => {
                this.setState({ etudiants: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    afficheInfos() {
        this.setState({
            afficheInfo: !this.state.afficheInfo
        })
    }

    deleteEtudiant(id) {
        axios.delete('http://localhost:3006/api/etudiants/' + id)
            .then(res => console.log(res.data))
            .then(this.setState({
                etudiants: this.state.etudiants.filter(el => el._id !== id)
            }))

        alert("Etudiant a été supprimé")




    }
    // add(e) {
    //     window.location = '/AddEtudiant';
    //     console.log('Le lien a été cliqué.');
    // }
    render() {

        const etudiant = this.state.etudiants.map((etudiant) => (


            <tr key={etudiant._id}>
                <td>{etudiant.nom} {etudiant.prenom}</td>
                <td>{etudiant.cne}</td>
                <td>{etudiant.filiere}</td>
                <td>{etudiant.date_naissance}</td>
                <td>{etudiant.adresse}</td>
                <td>{etudiant.sexe}</td>
                <td>
                    <Link to={"/EditEtudiant/" + etudiant._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                </td>
                <td>
                    <button className="btn btn-outline-danger btn-sx" onClick={() => { this.deleteEtudiant(etudiant._id) }} ><i className="fa fa-trash-o" ></i></button>
                </td>
            </tr>


        ))

        {/* {(this.state.afficheInfo) ?
                            (<div>

                                <h6 className="card-title" >CIN : {etudiant.cin}</h6>
                                <h6 className="card-title">CNE : {etudiant.cne}</h6>
                                <h6 className="card-title">Adresse : {etudiant.adresse}</h6>
                                <h6 className="card-title">{etudiant.sexe}</h6>


                            </div>) : null} */}
        {/* <div className="row right">
                            <div className="col-md-6" style={{ left: '50%' }}>
                                <Link to={"/EditEtudiant/" + etudiant._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                            </div>
                            <div className="col-md-6" style={{ left: '20%' }}>
                                <button className="btn btn-outline-danger btn-sx" onClick={() => { this.deleteEtudiant(etudiant._id) }} ><i className="fa fa-trash-o" ></i></button>
                            </div>
                        </div> */}




        return (
            <div className="container" style={{ margin: '50px' }}>
                <div className="row">
                    <div className="col-md-12" style={{ margin: '2%' }}>
                        <Link to='/AddEtudiant'>
                            <button type="button" className="btn btn-info btn-sm float-right"><i className="fa fa-plus" ></i></button>
                        </Link>

                    </div>
                </div>
                {/* <div className="card" >
                    <div className="row">
                        {etudiant}
                    </div>
                </div> */}

                <div>
                    <h3>les etudiants</h3>
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                                <th>Nom & Prenom</th>
                                <th>CNE</th>
                                <th>Filiere</th>
                                <th>Date de naissance</th>
                                <th>Adresse</th>
                                <th>sexe</th>
                                <th>modifier</th>
                                <th>Suprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {etudiant}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
