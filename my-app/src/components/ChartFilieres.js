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
          data: [20, 80],
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

              backH.push(`rgb(${i + c},${c + 50},${i + 50})`);
              c = c + 100;
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

      <div className="col-md-8" style={{ left: '40%' }}>
        <MDBContainer >
          <h4 className="mt-5" style={{ textAlign: 'center' }}>Nombre des etudiants dans chaque filiere</h4>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </MDBContainer>
      </div>

    );
  }
}

export default ChartFiliere;