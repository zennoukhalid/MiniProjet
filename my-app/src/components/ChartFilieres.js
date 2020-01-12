import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';

class ChartFiliere extends React.Component {
  state = {
    dataPie: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [




          ],

        }
      ]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3006/api/filieres/')
      .then(res => {
        this.setState({
          dataPie: {
            labels: res.data.map(elm =>
              elm.nom_filiere)
          }
        })
        console.log(this.state.dataPie.labels);
        var n = this.state.dataPie.labels.length;
        axios.get('http://localhost:3006/api/etudiants')
          .then(res => {
            console.log(res.data);
            var i = 0;
            var a;
            var tab = [];
            var backH = [];
            var c = 0;
            while (i < n) {
              a = this.state.dataPie.labels[i]
              var fil = res.data.filter(elm => elm.filiere === a);
              console.log("le nombre est " + a + " " + fil.length);
              tab.push(fil.length);

              backH.push(`rgb(${i +c},${c + 50},${i +10})`);
              c = c +40;
              i++;

            }

            this.setState({
              dataPie: { datasets: [{ backgroundColor: backH }] }
            })
            this.setState({
              dataPie: { datasets: [{ data: tab }] }
            })

          })
          .catch((error) => {
            console.log(error);
          })

      })
  }




  render() {
    return (

      <div style={{  left:"20%"}}>
        <MDBContainer >
          <h5 className="mt-5" style={{ textAlign: 'center' }}>Nombre des étudiants dans chaque filière</h5>
          <br/>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </MDBContainer>
        <br></br>

      </div>

    );
  }
}

export default ChartFiliere;