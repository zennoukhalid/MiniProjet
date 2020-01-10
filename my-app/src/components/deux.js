import React, { Component } from 'react'
import ChartEtudiant from '../components/ChartEtudiant'
import ChartFiliere from '../components/ChartFilieres'




export default class Deux extends Component {
    render() {
        return (

            <div className="row" style={{ backgroundColor: 'rgb(229, 232, 236)', margin: '50px' }}>
                <div className="col-md-6">
                    <ChartEtudiant />
                </div>
                <div className="col-md-6">
                    <ChartFiliere />
                </div>

            </div>



        )
    }
}