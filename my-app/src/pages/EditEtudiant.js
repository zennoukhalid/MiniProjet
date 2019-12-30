import React, { Component } from 'react'
import '../css/Etudiant.css';

export default class EditEtudiant extends Component {

    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeFiliere = this.onChangeFiliere.bind(this);
        this.onChangeCNE = this.onChangeCNE.bind(this);
        this.onChangeCIN = this.onChangeCIN.bind(this);
        this.onChangeDate_naissance = this.onChangeDate_naissance.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        this.onChangeSexe = this.onChangeSexe.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            Nom: '',
            Prenom: '',
            Filiere: '',
            CNE: '',
            CIN: '',
            Date_naissance: '',
            Adresse: '',
            Sexe: ''
        }

    }

    // componentDidMount() {
    //     this.setState({
    //         Filieres: ['test user', 'khalid', 'isil'],
    //         Filiere: ['test']
    //     })
    // }

    onChangeNom(e) {
        this.setState({
            Nom: e.target.value
        });
    }
    onChangePrenom(e) {
        this.setState({
            Prenom: e.target.value
        });
    }
    onChangeFiliere(e) {
        this.setState({
            Filiere: e.target.value
        });
    }
    onChangeCNE(e) {
        this.setState({
            CNE: e.target.value
        });
    }
    onChangeCIN(e) {
        this.setState({
            CIN: e.target.value
        });
    }
    onChangeDate_naissance(e) {
        this.setState({
            Date_naissance: e.target.value
        });
    }
    onChangeAdresse(e) {
        this.setState({
            Adresse: e.target.value
        });
    }
    onChangeSexe(e) {
        this.setState({
            Sexe: e.target.value
        });
    }

    onClick(e) {
        e.preventDefault();

        const Etudiant = {
            Nom: this.state.Nom,
            Prenom: this.state.Prenom,
            Filiere: this.state.Filiere,
            CNE: this.state.CNE,
            CIN: this.state.CIN,
            Date_naissance: this.state.Date_naissance,
            Adresse: this.state.Adresse,
            Sexe: this.state.Sexe

        }
        console.log(Etudiant);
        // window.location = '/';
    }

    render() {
        const mystyle = {
            color: "blue",
            padding: "10px",
            fontFamily: "Arial"
        };
        function annuler(e) {
            window.location = '/Etudiant';
            console.log('annuler la modification  !!!!!!!');
        }

        return (
            <div className="container">
                <div className="col-md-8">
                    <p style={mystyle}>Modifier un Etudiant</p>
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Nom: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.Nom}
                                    onChange={this.onChangeNom}
                                />
                            </div>
                            <div className="col-md-6">
                                <label>Prenom: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.Prenom}
                                    onChange={this.onChangePrenom}
                                />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>CNE: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.CNE}
                                    onChange={this.onChangeCNE}
                                />
                            </div>
                            <div className="col-md-6">
                                <label>CIN: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.CIN}
                                    onChange={this.onChangeCIN}
                                />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="sel1">Filiere:</label>
                                    <select className="form-control" required
                                        value={this.state.Filiere}
                                        onChange={this.onChangeFiliere} >
                                        <option>Filiere1</option>
                                        <option>Filiere2</option>
                                        <option>Filiere3</option>
                                        <option>Filiere4</option>
                                    </select>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <label>Date de naissance: </label>
                                <input type="Date"
                                    required
                                    className="form-control"
                                    value={this.state.Date_naissance}
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
                                    value={this.state.Adresse}
                                    onChange={this.onChangeAdresse}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Sexe: </label>
                                    <select className="form-control" required
                                        value={this.state.Sexe}
                                        onChange={this.onChangeSexe} >
                                        <option>M</option>
                                        <option>F</option>
                                    </select>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="submit" value="Modifier" className="btn btn-primary"
                                        onClick={this.onClick} />
                                </div>
                                <div className="col-md-6">
                                    <input type="submit" value="Annuler" className="btn btn-primary"
                                        onClick={annuler} />
                                </div>
                            </div>
                        </div>

                    </form>


                </div>

            </div>
        )
    }
}