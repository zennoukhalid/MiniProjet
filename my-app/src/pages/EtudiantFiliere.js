import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EtudiantFiliere extends Component {

    constructor(props) {
        super(props);

        this.state = {
            etudiants: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3006/api/etudiants/filiere/' + this.props.match.params.filiere)
            .then(res => {
                this.setState({ etudiants: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEtudiant(id) {
        axios.delete('http://localhost:3006/api/etudiants/' + id)
            .then(res => console.log(res.data))
            .then(this.setState({
                etudiants: this.state.etudiants.filter(el => el._id !== id)
            }))



    }




    afficheInfos() {
        this.setState({
            afficheInfo: !this.state.afficheInfo
        })
    }

    render() {




        const etudiant = this.state.etudiants.map(etudiant => (
            <div className="col-md-4" key={etudiant._id}>
                <div className="card" >
                    <div className="card-body">

                        <i onClick={() => this.afficheInfos()} style={{ color: 'blue', cursor: 'pointer', marginLeft: '80%' }} className="fa fa-sort-down"></i>

                        <h5 className="card-title">Nom :{etudiant.nom}</h5>
                        <h5 className="card-title">Prenom :{etudiant.prenom}</h5>
                        <h5 className="card-title">Feliere :{etudiant.filiere}</h5>

                        {(this.state.afficheInfo) ?
                            (<div>

                                <h6 className="card-title">CIN :{etudiant.cin}</h6>
                                <h6 className="card-title">CNE :{etudiant.cne}</h6>
                                <h6 className="card-title">Adresse :{etudiant.adresse}</h6>
                                <h6 className="card-title">{etudiant.sexe}</h6>



                            </div>) : null}
                        <div className="row right">
                            <div className="col-md-6" style={{ left: '50%' }}>
                                <Link to={"/EditEtudiant/" + etudiant._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                            </div>
                            <div className="col-md-6" style={{ left: '20%' }}>
                                <button className="btn btn-outline-danger btn-sx" onClick={() => { this.deleteEtudiant(etudiant._id) }} ><i className="fa fa-trash-o" ></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        return (
            <div className="container" style={{ margin: '50px' }}>
                <div className="row">
                    <div className="col-md-12" style={{ margin: '2%' }}>
                        <Link to='/AddEtudiant'>
                            <button type="button" className="btn btn-primary btn-sm float-right"><i className="fa fa-plus" aria-hidden="true"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="card" >
                    <div className="row">
                        {etudiant}
                    </div>
                </div>

            </div>
        )
    }
}
