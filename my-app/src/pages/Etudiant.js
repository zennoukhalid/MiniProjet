import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBarFiliere from '../components/NavBarFiliere';

export default class Etudiant extends Component {

    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            etudiants: [],
            listFilter:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3006/api/etudiants/')
            .then(res => {
                this.setState({ etudiants: res.data,
                listFilter:res.data})
            })
            .catch((error) => {
                console.log(error);
            })

           

    }
   

    deleteEtudiant(id) {
        axios.delete('http://localhost:3006/api/etudiants/' + id)
            .then(res => console.log(res.data))
            .then(this.setState({
                listFilter: this.state.etudiants.filter(el => el._id !== id)
            }))

        alert("Etudiant a été supprimé");
    }
    

    
    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.etudiants.filter(elm=>(elm.nom.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
   
    render() {

        const etudiant = this.state.listFilter.map((etudiant) => (


            <tr key={etudiant._id}>
                <td>{etudiant.nom} {etudiant.prenom}</td>
                <td>{etudiant.cne}</td>
                <td>{etudiant.filiere}</td>
                <td>{etudiant.adresse}</td>
                <td>{etudiant.sexe}</td>
                <td>
                    <Link to={"/EditEtudiant/" + etudiant._id} > <button className="btn btn-outline-info btn-sx"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
                
                    &nbsp;&nbsp;
                    <button className="btn btn-outline-danger btn-sx" onClick={() => { this.deleteEtudiant(etudiant._id) }} ><i className="fa fa-trash-o" ></i></button>
                </td>
            </tr>


        ))

        return (
            <div className="container" style={{ margin: '20px 5% 5% 0%' }}>
                <NavBarFiliere/>
                <nav className="navbar navbar-light bg-light">                

                    <input className="form-control mr-sm-2" type="search" placeholder="Recherche" 
                    value={this.state.val} onChange={(e)=>{this.OnchangeState(e)}} />
  
                </nav>
                <div className="row">
                    <div className="col-md-12" style={{ margin: '2%' }}>
                        <Link to='/AddEtudiant'>
                            <button type="button" className="btn btn-info btn-sm float-right"><i className="fa fa-plus" ></i></button>
                        </Link>

                    </div>
                </div>
                <div>
                    <h3>tous les étudiants</h3>
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                                <th>Nom & Prenom</th>
                                <th>CNE</th>
                                <th>Filiere</th>
                                <th>Adresse</th>
                                <th>sexe</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {etudiant}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
