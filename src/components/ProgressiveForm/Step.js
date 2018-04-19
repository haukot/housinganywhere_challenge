import React, { Component } from 'react';

// TODO use css-modules
import './index.css'

class Step extends Component {
  render() {
    const { children, nextStep, render } = this.props;
    const contentFn = children || render;
    return (
      <div className="formStep">
          {contentFn(nextStep)}
      </div>
    );
  }
}

export default Step;
