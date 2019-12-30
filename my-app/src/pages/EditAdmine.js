import React, { Component } from 'react'
import '../css/admin.css';

export default class EditAdmine extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPsswd = this.onChangeConfirmPsswd.bind(this);
        this.oncklic = this.oncklic.bind(this);

        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            ConfirmPsswd: ''

        }

    }
    onChangeFirstName(e) {
        this.setState({
            FirstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            LastName: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        });
    }
    onChangeConfirmPsswd(e) {
        this.setState({
            ConfirmPsswd: e.target.value
        });
    }


    oncklic(e) {
        e.preventDefault();

        const Profs = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            Password: this.state.Password,
            ConfirmPsswd: this.state.ConfirmPsswd
        }
        console.log(Profs);
        //window.location = '/Prof';
    }

    render() {

        function Annuler(e) {
            window.location = '/';
            console.log('Annuler la modification de admlin');
        }
        const form_control = {
            border: "1px solid rgb(24, 22, 22)",
            display: "block",
            width: "100 %",
            height: "40px",
            padding: "0 20px",
            border_radius: "20px",
            font_family: "Muli-Bold",
            background: "none"
        };
        const form_group = {
            display: "flex"
        }

        return (
            <div className="wrapper" >

                < div className="inner" >
                    <form action="">
                        <h3>Modifier un Admin</h3>
                        <div className="form-group" style={form_group}>
                            <div className="form-wrapper">
                                <label >Nom</label>
                                <input type="text" className="form-control"
                                    value={this.state.FirstName}
                                    onChange={this.onChangeFirstName}
                                    style={form_control} />
                            </div>
                            <div className="form-wrapper">
                                <label >Prenom</label>
                                <input type="text" className="form-control"
                                    value={this.state.LastName}
                                    onChange={this.onChangeLastName}
                                    style={form_control} />
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <label >Email</label>
                            <input type="email" className="form-control"
                                value={this.state.Email}
                                onChange={this.onChangeEmail}
                                style={form_control} />
                        </div>
                        <div className="form-wrapper">
                            <label >Mot de passe</label>
                            <input type="password" className="form-control"
                                value={this.state.Password}
                                onChange={this.onChangePassword}
                                style={form_control} />
                        </div>
                        <div className="form-wrapper">
                            <label >Confirmer mot de passe</label>
                            <input type="password" className="form-control"
                                value={this.state.ConfirmPsswd}
                                onChange={this.onChangeConfirmPsswd}
                                style={form_control} />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <button onClick={this.oncklic}>Mdifier</button>
                            </div>
                            <div className="col-md-6">
                                <button onClick={Annuler}>Annuler</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        )
    }
}