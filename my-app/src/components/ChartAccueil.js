import React, { Component } from 'react'
import ChartEtudiant from './ChartEtudiant'
import ChartFiliere from './ChartFilieres'
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'
import NavbarChart from './NavbarChart'
//import {ButtonGroup, Dropdown,Button,Toggle} from 'react-dropdown'




export default class ChartAccueil extends Component {
    render() {
        return (
          <div className="col-md-7" style={{left:"20%"}}>
              <NavbarChart />

         
                    <ChartEtudiant />
                    
                    <ChartFiliere />

                    
                    
    </div>


            


        )
    }
}