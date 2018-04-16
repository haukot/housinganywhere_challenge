import React, { Component } from 'react';

class Step extends Component {
  render() {
    const { children, nextStep, render } = this.props;
    const contentFn = children || render;
    return (
      <div style={{margin: 20}}>
          {contentFn(nextStep)}
      </div>
    );
  }
}

export default Step;
