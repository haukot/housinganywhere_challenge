import React, { Component } from 'react';

class Step extends Component {
  render() {
    const { active, disabled } = this.props;
    return (
      <div style={{margin: 20}}>
          {this.props.children(this.props.nextStep)}
      </div>
    );
  }
}

export default Step;
