import React, { Component } from 'react'

export default class Prof extends Component {
    render() {
        function addP(e) {
            window.location = '/AddProf';
            console.log('Le lien a été cliqué.');
        }
        function editP(e) {
            window.location = '/EditProf';
            console.log('Le lien a été cliqué.');
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
                                                <button type="button" className="btn btn-success" onClick={editP}><i>Modifier</i></button>
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
                                                <button type="button" className="btn btn-success" onClick={editP}><i>Modifier</i></button>
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
                                                <button type="button" className="btn btn-success" onClick={editP}><i>Modifier</i></button>
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
                                                <button type="button" className="btn btn-success" onClick={editP}><i>Modifier</i></button>
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
                        <input type="submit" value="Ajouter un Proffesseur" className="btn btn-primary float-right" onClick={addP} />
                    </div>
                </div>
            </div >

        )
    }
}