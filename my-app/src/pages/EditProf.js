import React, { Component } from 'react'
import '../css/Etudiant.css';
import axios from 'axios';
import { Link } from '@material-ui/core';


export default class EditProf extends Component {

    constructor(props) {
        super(props);
        this.onChangephone = this.onChangephone.bind(this);
        this.onChangeCIN = this.onChangeCIN.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        this.onChangeSexe = this.onChangeSexe.bind(this);
        this.onChangeFiliere = this.onChangeFiliere.bind(this);
        this.onChangeDate_naissance = this.onChangeDate_naissance.bind(this);

        this.onClick = this.onClick.bind(this);

        this.state = {
            phone: '',
            cin: '',
            nom: '',
            prenom: '',
            adresse: '',
            date_naissance: '',
            sexe: '',
            filiere: '',
            filieres: []




        }

    }

    componentDidMount() {
        axios.get('http://localhost:3006/api/filieres/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        filieres: res.data.map(filiere => filiere.nom_filiere),
                        filiere: res.data[0].nom_filiere
                    })
                    console.log(res.data[0].filiere)
                }
                else {
                    alert("vous devez ajouter une filiere")
                }

            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:3006/api/profs/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    phone: res.data.phone,
                    cin: res.data.cin,
                    nom: res.data.nom,
                    prenom: res.data.prenom,
                    adresse: res.data.adresse,
                    date_naissance: res.data.date_naissance,
                    sexe: res.data.sexe,
                    filiere: res.data.filiere
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    onChangeNom(e) {
        this.setState({
            nom: e.target.value
        });
    }
    onChangePrenom(e) {
        this.setState({
            prenom: e.target.value
        });
    }
    onChangeFiliere(e) {
        this.setState({
            filiere: e.target.value
        });
    }
    onChangephone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeCIN(e) {
        this.setState({
            cin: e.target.value
        });
    }
    onChangeDate_naissance(e) {
        this.setState({
            date_naissance: e.target.value
        });
    }
    onChangeAdresse(e) {
        this.setState({
            adresse: e.target.value
        });
    }
    onChangeSexe(e) {
        this.setState({
            sexe: e.target.value
        });
    }

    onClick(e) {
        e.preventDefault();

        const Prof = {
            phone: this.state.phone,
            cin: this.state.cin,
            nom: this.state.nom,
            prenom: this.state.prenom,
            adresse: this.state.adresse,

            date_naissance: this.state.date_naissance,
            sexe: this.state.sexe,
            filiere: this.state.filiere,


        }
        console.log(Prof);
        axios.post('http://localhost:3006/api/profs/modifier/' + this.props.match.params.id, Prof)
            .then(res => console.log(res.data));
        alert("Prof a est modifié")
        // window.location = '/Prof';
    }

    render() {
        const mystyle = {
            color: "blue",
            padding: "10px",
            fontFamily: "Arial"
        };


        return (
            <div className="container">
                <div className="col-md-8">
                    <p style={mystyle}>Modifier un Proffesseur</p>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Nom: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.nom}
                                onChange={this.onChangeNom}
                            />
                        </div>
                        <div className="col-md-6">
                            <label>Prenom: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.prenom}
                                onChange={this.onChangePrenom}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Phone: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangephone}
                            />
                        </div>
                        <div className="col-md-6">
                            <label>CIN: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.cin}
                                onChange={this.onChangeCIN}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="sel1">Filiere:</label>
                                <select className="form-control" required
                                    value={this.state.filiere}
                                    onChange={this.onChangeFiliere} >
                                    {
                                        this.state.filieres.map(function (filiere) {
                                            return <option key={filiere}
                                            >{filiere}</option>
                                        })
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label>Date de naissance: </label>
                            <input type="Date"
                                required
                                className="form-control"
                                value={this.state.date_naissance}
                                onChange={this.onChangeDate_naissance}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Adresse: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.adresse}
                                onChange={this.onChangeAdresse}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Sexe: </label>
                                <select className="form-control" required
                                    value={this.state.sexe}
                                    onChange={this.onChangeSexe} >
                                    <option></option>

                                    <option>M</option>
                                    <option>F</option>


                                </select>

                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6">

                                <input type="submit" value="Valider" className="btn btn-primary"
                                    onClick={this.onClick} />
                            </div>
                            <div className="col-md-6">
                                <Link to='/Prof'>
                                    <input type="submit" value="Annuler" className="btn btn-primary"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        )
    }
}