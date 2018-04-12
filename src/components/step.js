import React, { Component } from 'react';

class Step extends Component {
  render() {
    const { active, disabled } = this.props;
    return (
      <div>
          { active }
          { disabled }
          {this.props.children(this.props.nextStep)}
          <hr />
      </div>
    );
  }
}

export default Step;
