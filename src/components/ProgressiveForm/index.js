import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressiveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: this.props.activeStep || 0,
    };
  }

  nextStep(fromStep) {
    if (fromStep < this.state.activeStep) return;
    this.setState({ activeStep: fromStep + 1 });
  }

  render() {
    const { children } = this.props;
    const { activeStep } = this.state;

    const childrenArray = React.Children.toArray(children);
    const steps = childrenArray.map((step, index) => {
      const controlProps = {
        index,
        active: activeStep >= index,
        nextStep: () => this.nextStep(index),
      };

      // disabled because steps don't have other uniq key except index
      /* eslint-disable react/no-array-index-key */
      return [
        <div key={index} style={{ display: controlProps.active ? 'block' : 'none' }} >
          { React.cloneElement(step, { ...controlProps, ...step.props }) }
        </div>,
      ];
      /* eslint-enable react/no-array-index-key */
    });

    return (
      <div style={{ marginTop: '20px' }}>
          form
        { steps }
      </div>
    );
  }
}

ProgressiveForm.propTypes = {
  activeStep: PropTypes.number,
  children: PropTypes.node,
};

export default ProgressiveForm;
