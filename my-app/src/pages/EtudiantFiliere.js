import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBarFiliere from '../components/NavBarFiliere';
import EtudiantsF from './EtudiantsF';

export default class EtudiantFiliere extends Component {

    constructor(props) {
        super(props);

        this.state = {
            etudiants: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3006/api/etudiants/')
            .then(res => {
                this.setState({ etudiants: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEtudiant(id) {
        axios.delete('http://localhost:3006/api/etudiants/' + id)
            .then(res => console.log(res.data))
            .then(this.setState({
                etudiants: this.state.etudiants.filter(el => el._id !== id)
            }))



    }





    render() {

       

        return (
            <div className="container" style={{ margin: '20px 5% 5% 0%' }}>
                <NavBarFiliere/>
                <div className="row">
                    <div className="col-md-12" style={{ margin: '2%' }}>
                        <Link to='/AddEtudiant'>
                            <button type="button" className="btn btn-info btn-sm float-right"><i className="fa fa-plus" ></i></button>
                        </Link>

                    </div>
                </div>
                <div>
        <h3 style={{textAlign:"center"}}>Tous les  étudiants de filière {this.props.match.params.filiere}</h3>
                   
                            <EtudiantsF etudiants={this.state.etudiants} lien={this.props.match.params.filiere} deleteEtudiant={(id)=>{this.deleteEtudiant(id)}} />
                   
                </div>

            </div>
        )
    }
}