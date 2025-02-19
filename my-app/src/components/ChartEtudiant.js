import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';

class ChartEtudiant extends React.Component {
  state = {
    dataPie: {
      labels: ['Etudiantes', 'Etudiants'],
      datasets: [
        {
          data: [20, 80, 100],
          backgroundColor: [
            "#F8765B",
            "#46BFBD",


          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1"
          ]
        }
      ]
    }
  }
  componentDidMount() {

    axios.get('http://localhost:3006/api/etudiants')
      .then(res => {
        console.log(res.data);

        var m = res.data.filter(elm => elm.sexe !== 'F');
        var f = res.data.filter(elm => elm.sexe !== 'M')
        // console.log("etudiants "+m.length);
        // console.log("etudiantes "+f.length);
        var tab = [f.length, m.length]
        this.setState({
          dataPie: { datasets: [{ data: tab }] }


        })
      })
      .catch((error) => {
        console.log(error);
      })




  }




  render() {
    return (

      <div style={{left:"20%"}}>

        <MDBContainer>                
          <br/>

          <h5 className="mt-5" style={{ textAlign: 'center' }}>Nombre des Etudiants et des Etudiantes dans Ecole</h5>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </MDBContainer>


        <br></br>
      </div>

    );
  }
}

export default ChartEtudiant;