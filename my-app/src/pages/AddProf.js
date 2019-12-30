import React, { Component } from 'react'

export default class AddProf extends Component {

    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeFiliere = this.onChangeFiliere.bind(this);
        this.onChangeCNE = this.onChangeCNE.bind(this);
        this.onChangeCIN = this.onChangeCIN.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Nom: '',
            Prenom: '',
            Filiere: '',
            CNE: '',
            CIN: '',
            Age: ''
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
    onChangeAge(e) {
        this.setState({
            Age: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const Profs = {
            Nom: this.state.Nom,
            Prenom: this.state.Prenom,
            Filiere: this.state.Filiere,
            CNE: this.state.CNE,
            CIN: this.state.CIN,
            Age: this.state.Age

        }
        console.log(Profs);
        //window.location = '/Prof';
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
                    <p style={mystyle}>Ajouter un Prof</p>
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
                                <label>Filiere: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.Filiere}
                                    onChange={this.onChangeFiliere}
                                />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>CIN: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.CIN}
                                    onChange={this.onChangeCIN}
                                />
                            </div>
                            <div className="col-md-6">
                                <label>Age: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.Age}
                                    onChange={this.onChangeAge}
                                />
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-md-12">
                                <input type="submit" value="Ajouter un Prof" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>



                </div>


            </div>
        )
    }
}