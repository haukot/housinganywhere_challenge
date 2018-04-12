import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressiveForm from './components/progressive_form.js';
import Step from './components/step.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ProgressiveForm>
            <Step>
                { (nextStep) =>
                 <div>
                    <input type='checkbox' onChange={nextStep} /> A1
                    <input type='checkbox' onChange={nextStep} /> A2
                 </div>
                 }
            </Step>
            <Step>
                { (nextStep) =>
                 <div>
                    <input type='checkbox' onChange={nextStep} /> A1
                    <input type='checkbox' onChange={nextStep} /> A2
                 </div>
                 }
            </Step>
            <Step>
                { (nextStep) =>
                 <div>
                    <input type='checkbox' onChange={nextStep} /> A1
                    <input type='checkbox' onChange={nextStep} /> A2
                 </div>
                 }
            </Step>
        </ProgressiveForm>
      </div>
    );
  }
}

export default App;
