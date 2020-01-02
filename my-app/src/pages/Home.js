import React, { Component } from 'react'
import ChartEtudiant from '../components/ChartEtudiant'
import ChartFiliere from '../components/ChartFilieres'


export default class Home extends Component {
    render() {
        return (
            <div >
                <div className="col-md-10">
                    <ChartEtudiant/>
                    <ChartFiliere/>
                </div>
            </div>
            
            
        )
    }
}