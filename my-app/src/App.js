import React, { Component } from 'react'

import Home from './pages/Home'
import Login from './pages/Login';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {
        email: 'khalidzennou@gmail.com',
        password: 'Khalid1001',
      },
    }
  }

  render() {
    const app = this.state.loggedIn ?
      <Home signout={() => this.setState({ loggedIn: false, user: null })} user={this.state.user} /> :
      <Login signIn={(user) => this.setState({ loggedIn: true, user: user })} />;

    return (
      <div>
        {app}

        {/* <Home signOut={() => this.setState({ loggedIn: false, user: null })} user={this.state.user} /> */}
      </div>
    )
  }
}

