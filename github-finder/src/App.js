import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  
  // Runs on load
  async componentDidMount() {
    this.setState({loading: true});

    const res = await axios.get('https://api.github.com/users');

    res.data.push({
      login: 'MsNiyaJ',
      id: 47842684,
      avatar_url: 'https://avatars.githubusercontent.com/u/47842684?v=4',
      html_url: 'https://github.com/MsNiyaJ'
    })

    this.setState({users: res.data, loading: false});
  }

  render() {
    return (
      <div className='App'>
        <Navbar/>
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
