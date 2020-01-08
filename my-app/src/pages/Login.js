// import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import axios from 'axios';
import '../css/Login.css';



export default class Login extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);

        this.state = {
            email: null,
            password: null
        }
    }
    submit(e) {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        const body = { email: email };
        axios.post('http://localhost:3006/api/admin/auth', body).then(res => {
            if (res.data.length > 0) {
                if (res.data[0].password === password) this.props.signIn(res.data[0]);
                else alert('Password incorrect');
            }
            else alert('Email incorrect');

        });

    }


    render() {
        return (
            <div className='container' >
                <div className="login-card">
                    <h1>Log in</h1><br />
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => {
                                this.setState({ email: e.target.value })
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="none"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => {
                                this.setState({ password: e.target.value })
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.submit}
                            style={{ marginTop: 40, paddingTop: 12 }}
                        >
                            <h4>Sign In</h4>
                        </Button>
                    </form>

                    <div className="login-help">
                        <Box mt={8}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                {'Copyright © '}
                                <Link color="inherit" href="http://www.este.ucam.ac.ma">
                                    EST Essouira
                        </Link>{' '}
                                {new Date().getFullYear()}
                                {'.'}
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>

        );
    }
}