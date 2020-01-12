import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
import NavbarChart from "./NavbarChart";

class ChartSeulFiliere extends React.Component {
  state = {
    name:'',
    dataPie: {
      labels: ['Etudiantes', 'Etudiants'],
      datasets: [
        {
          data: [],
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

    axios.get('http://localhost:3006/api/etudiants/filiere/' + this.props.match.params.filiere)
      .then(res => {


        var m = res.data.filter(elm => elm.sexe !== 'F');
        var f = res.data.filter(elm => elm.sexe !== 'M')
         console.log("etudiants "+m.length);
         console.log("etudiantes "+f.length);
        var tab = [f.length, m.length]
        this.setState({
          dataPie: { datasets: [{ data: tab }] },
            name:this.props.match.params.filiere

        })
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })




  }

  render() {
    return (
      <div>
      <div className="col-md-7" style={{left:"20%"}}>
        <NavbarChart/>
        <MDBContainer>
          <h5 className="mt-5" style={{ textAlign: 'center' }}>{this.state.name}</h5>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </MDBContainer>


        <br></br>
      </div>
</div>
    );
  }
}

export default ChartSeulFiliere;