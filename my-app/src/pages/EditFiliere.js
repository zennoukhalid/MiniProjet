import React, { Component } from 'react'


export default class EditFiliere extends Component {
    constructor(props) {
        super(props);

        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeNomModule1 = this.onChangeNomModule1.bind(this);
        this.onChangeNoteModule1 = this.onChangeNoteModule1.bind(this);

        this.onChangeNomModule2 = this.onChangeNomModule2.bind(this);
        this.onChangeNoteModule2 = this.onChangeNoteModule2.bind(this);


        this.onClick = this.onClick.bind(this);

        this.state = {
            Nom: '',
            Description: '',
            Modules1: [
                {
                    NomModule1: '',
                    NoteModule1: ''
                }
            ],
            Modules2: [
                {
                    NomModule2: '',
                    NoteModule2: ''
                }
            ]

        }
    }

    onChangeNom(e) {
        this.setState({
            Nom: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        });
    }

    onChangeNomModule1(e) {
        this.setState({
            NomModule1: e.target.value
        });
    }
    onChangeNoteModule1(e) {
        this.setState({
            NoteModule1: e.target.value
        });
    }
    onChangeNomModule2(e) {
        this.setState({
            NomModule2: e.target.value
        });
    }
    onChangeNoteModule2(e) {
        this.setState({
            NoteModule2: e.target.value
        });
    }

    onClick(e) {
        e.preventDefault();

        const Filiere = {
            Nom: this.state.Nom,
            Description: this.state.Description,
            Modules1: [
                this.state.NomModule1,
                this.state.NoteModule1
            ],
            Modules2: [
                this.state.NomModule2,
                this.state.NoteModule2
            ]


        }
        console.log(Filiere);
    }
    render() {
        function annuler(e) {
            window.location = '/Filiere';
            console.log("annuler");

        }
        return (
            <div className="container">
                <h3>Modifier une Filiere</h3>
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
                        <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <textarea className="form-control"
                                id="Description" rows="3"
                                value={this.state.Description}
                                onChange={this.onChangeDescription}>

                            </textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p>Modules 1</p>
                    <hr></hr>
                    <div className="col-md-3">
                        <label>Nom de Module: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.NomModule1}
                            onChange={this.onChangeNomModule1}
                        />
                    </div>

                    <div className="col-md-3">
                        <label>Note: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.NoteModule1}
                            onChange={this.onChangeNoteModule1}
                        />
                    </div>
                </div>
                <div className="row">
                    <p>Modules 2</p>
                    <hr></hr>
                    <div className="col-md-3">
                        <label>Nom de Module: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.NomModule2}
                            onChange={this.onChangeNomModule2}
                        />
                    </div>

                    <div className="col-md-3">
                        <label>Note: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.NoteModule2}
                            onChange={this.onChangeNoteModule2}
                        />
                    </div>
                </div>


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
        )
    }
}