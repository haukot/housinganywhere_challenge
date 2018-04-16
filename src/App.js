import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import AppProgressiveForm from './components/app_progressive_form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Form</h1>
        </header>

        <AppProgressiveForm />
      </div>
    );
  }
}

export default App;
