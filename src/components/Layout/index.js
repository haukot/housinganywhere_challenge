import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../static/logo.svg';
import './index.css';

const Layout = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Form</h1>
    </header>

    { props.children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
