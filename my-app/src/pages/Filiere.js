import React, { Component } from 'react'


export default class Filiere extends Component {
    render() {
        function addF(e) {
            window.location = '/AddFiliere';
        }
        function editF(e) {
            window.location = '/EditFiliere';
            console.log("pour modifier filiere");
        }
        return (
            <div className="container">
                <div className="card" >
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" >
                                <div className="card-body">
                                    <h3 className="card-title">Nom Feliere :</h3>
                                    <h3 className="card-title">Description :</h3>
                                    <div className="form-group">
                                        <h3 className="card-title">Modules :</h3>
                                        <select class="form-control">
                                            <option>m1</option>
                                            <option>m2</option>
                                            <option>m3</option>
                                            <option>m4</option>
                                        </select>
                                    </div>
                                    <div className="row right">
                                        <div className="col-md-6">
                                            <td >
                                                <button type="button" className="btn btn-success" onClick={editF}><i>Modifier</i></button>
                                            </td>
                                        </div>
                                        <div className="col-md-6">
                                            <td >
                                                <button type="button" className="btn btn-danger"><i>Suprimer</i></button>
                                            </td>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" value="Ajouter une Filiere" className="btn btn-primary float-right" onClick={addF} />
                    </div>
                </div>
            </div>
        )
    }
}