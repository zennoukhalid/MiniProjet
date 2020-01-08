import React, { Component } from 'react'
import ChartEtudiant from '../components/ChartEtudiant'
import ChartFiliere from '../components/ChartFilieres'




export default class Deux extends Component {
    render() {
        return (

            <div className="col-md-10">

                <ChartEtudiant />
                <ChartFiliere />

            </div>



        )
    }
}