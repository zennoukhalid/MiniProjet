import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Filiere extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filieres: [],
            afficherinfo: false
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3006/api/filieres/')
            .then(res => {
                this.setState({ filieres: res.data })
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

    deleteFiliere(id) {
        axios.delete('http://localhost:3006/api/filieres/' + id)
            .then(res => console.log(res.data))
            .then(this.setState({
                filieres: this.state.filieres.filter(el => el._id !== id)
            }))
        alert("filiere a été supprimé")


    }
    render() {


        const filiere = this.state.filieres.map(filiere => (
            <div className="col-md-4" key={filiere._id}>
                <div className="card" >
                    <div className="card-body">

                        <i onClick={() => this.afficheInfos()} style={{ color: 'blue', cursor: 'pointer', marginLeft: '80%' }} className="fa fa-sort-down"></i>

                        <h5 className="card-title">{filiere.nom_filiere}</h5>


                        {(this.state.afficheInfo) ?
                            (<div>
                                <h6 className="card-title">Description :{filiere.description}</h6>
                            </div>)
                            : null
                        }
                        <div>
                            <button style={{ marginTop: '5%' }} className="btn btn-outline-info btn-sx" onClick={(e) => { window.location = '/Etudiant/' + filiere.nom_filiere }} >Etudiants</button>
                        </div>
                        <div className="row right">

                            <div className="col-md-6" style={{ left: '50%' }} >
                                <Link to={"/EditFiliere/" + filiere._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                            </div>
                            <div className="col-md-6" style={{ left: '20%' }}>
                                <button className="btn btn-outline-danger btn-sx" onClick={() => { this.deleteFiliere(filiere._id) }} ><i className="fa fa-trash-o" ></i></button>
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
                        <Link to='AddFiliere'>
                            <button type="button" className="btn btn-info btn-sm float-right"><i className="fa fa-plus" aria-hidden="true"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="card" >
                    <div className="row">
                        {filiere}
                    </div>
                </div>

            </div>
        )
    }
}