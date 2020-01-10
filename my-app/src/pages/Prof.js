import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Prof extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profs: [],
            afficherinfo: false
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3006/api/profs/')
            .then(res => {
                this.setState({ profs: res.data })
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

    deleteProf(id) {
        axios.delete('http://localhost:3006/api/profs/' + id)
            .then(res => console.log(res.data))
            .then(this.setState({
                profs: this.state.profs.filter(el => el._id !== id)
            }))

        alert("prof a été supprimé")




    }

    render() {
        // function add(e) {
        //     window.location = '/AddProf';
        //     console.log('Le lien a été cliqué.');
        // }



        const prof = this.state.profs.map((prof) => (
            <tr key={prof._id}>
                <td>{prof.nom} {prof.prenom}</td>
                <td>{prof.phone}</td>
                <td>{prof.filiere}</td>
                <td>{prof.date_naissance.substring(0, 10)}</td>
                <td>{prof.cin}</td>
                <td>{prof.adresse}</td>
                <td>{prof.sexe}</td>

                <td>
                    <Link to={"/EditProf/" + prof._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                </td>
                <td>
                    <button className="btn btn-outline-danger btn-sx" onClick={() => { this.deleteProf(prof._id) }} ><i className="fa fa-trash-o" ></i></button>
                </td>
            </tr>
            // <div className="col-md-4" key={prof._id}>
            //     <div className="card" >
            //         <div className="card-body" >

            //             <i onClick={() => this.afficheInfos()} style={{ color: 'blue', cursor: 'pointer', marginLeft: '80%' }} className="fa fa-sort-down"></i>

            //             <h5 className="card-title" >Nom : {prof.nom}</h5>
            //             <h5 className="card-title">Prenom : {prof.prenom}</h5>
            //             <h6 className="card-title" >Feliere : {prof.filiere}</h6>

            //             {(this.state.afficheInfo) ?
            //                 (<div>

            //                     <h6 className="card-title" >CIN : {prof.cin}</h6>
            //                     <h6 className="card-title">Phone : {prof.phone}</h6>
            //                     <h6 className="card-title">Adresse : {prof.adresse}</h6>
            //                     <h6 className="card-title">{prof.sexe}</h6>


            //                 </div>) : null}
            //             <div className="row right">
            //                 <div className="col-md-6" style={{ left: '50%' }}>
            //                     <Link to={"/EditProf/" + prof._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
            //                 </div>
            //                 <div className="col-md-6" style={{ left: '20%' }}>
            //                     <button className="btn btn-outline-danger btn-sx" onClick={() => { this.deleteProf(prof._id) }} ><i className="fa fa-trash-o" ></i></button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

        ))

        return (
            <div className="container" style={{ margin: '50px' }}>
                <div className="row">
                    <div className="col-md-12" style={{ margin: '2%' }}>
                        <Link to='/AddProf'>
                            <button type="button" className="btn btn-info btn-sm float-right"><i className="fa fa-plus" aria-hidden="true"></i></button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3>les Prosffesseurs</h3>
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr className="table-primary">
                                <th>Nom & Prenom</th>
                                <th>Téléphone</th>
                                <th>Filiere</th>
                                <th>Date de naissance</th>
                                <th>CIN</th>
                                <th>Adrese</th>
                                <th>Sexe</th>
                                <th>modifier</th>
                                <th>Suprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prof}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
