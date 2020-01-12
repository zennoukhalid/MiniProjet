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

            <tr key={filiere._id}>
                <td>{filiere.nom_filiere}</td>
                <td>{filiere.description}</td>
                <td>
                    <Link to={"/EditFiliere/" + filiere._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                    &nbsp;&nbsp;

                    <button className="btn btn-outline-danger btn-sx" onClick={() => { this.deleteFiliere(filiere._id) }} ><i className="fa fa-trash-o" ></i></button>
                </td>
            </tr>
        ))

        return (
            <div className="container" style={{ margin: '20px 5% 5% 0%' }}>
                <div className="row">
                    <div className="col-md-12" style={{ margin: '2%' }}>
                        <Link to='AddFiliere'>
                            <button type="button" className="btn btn-info btn-sm float-right"><i className="fa fa-plus" aria-hidden="true"></i></button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3>les Filières</h3>
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr className="table-primary">
                                <th>Nom de Filiere</th>
                                <th>Description</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {filiere}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}