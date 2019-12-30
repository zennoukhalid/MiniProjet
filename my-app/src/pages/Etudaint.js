import React, { Component } from 'react'

export default class Etudiant extends Component {
    render() {
        function add(e) {
            window.location = '/AddEtudiant';
            console.log('Le lien a été cliqué.');
        }
        function Edit(e) {
            window.location = '/EditEtudiant';
            console.log("modifier l'Etudiant");
        }
        return (

            <div className="container">
                <div className="card" >
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Nom :</h5>
                                    <h5 className="card-title">Prenom :</h5>
                                    <h5 className="card-title">Feliere :</h5>
                                    <div className="row right">
                                        <div className="col-md-6">
                                            <td >
                                                <button type="button" className="btn btn-success" onClick={Edit}><i>Modifier</i></button>
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

                        <div className="col-md-4">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Nom :</h5>
                                    <h5 className="card-title">Prenom :</h5>
                                    <h5 className="card-title">Feliere :</h5>
                                    <div className="row right">
                                        <div className="col-md-6">
                                            <td >
                                                <button type="button" className="btn btn-success" onClick={Edit}><i>Modifier</i></button>
                                            </td>
                                        </div>
                                        <div className="col-md-6">
                                            <td >
                                                <button type="button" className="btn btn-danger" onClick={Edit}><i>Suprimer</i></button>
                                            </td>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Nom :</h5>
                                    <h5 className="card-title">Prenom :</h5>
                                    <h5 className="card-title">Feliere :</h5>
                                    <div className="row right">
                                        <div className="col-md-6">
                                            <td >
                                                <button type="button" className="btn btn-success" onClick={Edit}><i>Modifier</i></button>
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

                        <div className="col-md-4">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Nom :</h5>
                                    <h5 className="card-title">Prenom :</h5>
                                    <h5 className="card-title">Feliere :</h5>
                                    <div className="row right">
                                        <div className="col-md-6">
                                            <td >
                                                <button type="button" className="btn btn-success" onClick={Edit}><i>Modifier</i></button>
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
                        <input type="submit" value="Ajouter un Etudiant" className="btn btn-primary float-right" onClick={add} />
                    </div>
                </div>
            </div >

        )
    }
}
