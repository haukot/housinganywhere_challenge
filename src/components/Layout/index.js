import React, { Component } from 'react';

import logo from '../../static/logo.svg';
import './index.css';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Form</h1>
        </header>

        { this.props.children }
      </div>
    );
  }
}

export default Layout;
