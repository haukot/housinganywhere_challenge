import React, { Component } from 'react';

import Layout from './components/Layout';
import AppProgressiveForm from './containers/AppProgressiveForm';

class App extends Component {
  render() {
    return (
        <Layout>
          <AppProgressiveForm />
        </Layout>
    );
  }
}

export default App;
