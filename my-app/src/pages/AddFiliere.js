import React, { Component } from 'react'
import axios from 'axios';

export default class AddFiliere extends Component {
    constructor(props) {
        super(props);

        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Nom: '',
            Description: '',

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

  
   
    onSubmit(e) {
        e.preventDefault();

        const Filiere = {
            nom_filiere: this.state.Nom,
            description: this.state.Description,

        }
        console.log(Filiere);

        axios.post('http://localhost:3006/api/filieres/ajouter',Filiere)
        .then(res=>console.log(res.data));
        alert("Filière a été ajouté");
         window.location = '/Filiere';
    }

  
    render() {
        const mystyle = {
            color: "blue",
            padding: "10px",
            fontFamily: "Arial",
            margin:"0 0 0 10px"
        };
        function annuler(e) {
            window.location = '/Filiere';
            console.log("annuler");

        }
        return (
            <div className="container">
                <h4 style={mystyle}>Ajouter une Filiere</h4>
                <div className="row">
                    <div className="col-md-6">
                        <label>Nom: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.Nom}
                            onChange={this.onChangeNom}
                        />
                        <label htmlFor="Description">Description</label>
                        <textarea className="form-control"
                            id="Description" rows="3"
                            value={this.state.Description}
                            onChange={this.onChangeDescription}>
                        </textarea>  
                    

                    
                    </div>

                </div>
              
                <div className="row">
                    <div className="col-md-6">
                        <input type="submit" value="Valider" className="btn btn-primary"
                            onClick={this.onSubmit} />
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