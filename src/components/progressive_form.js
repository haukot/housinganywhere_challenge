import React, { Component } from 'react';

class ProgressiveForm extends Component {
  state = {
    activeStep: 0
  }

  nextStep(fromStep) {
    if (fromStep < this.state.activeStep) return;
    this.setState({activeStep: fromStep + 1});
  }

  render() {
    const { children } = this.props;
    const { activeStep } = this.state; // TODO дать возможность выставить его сверху

    const childrenArray = React.Children.toArray(children);
    const steps = childrenArray.map((step, index) => {
      const controlProps = {
        index,
        active: activeStep >= index,
        nextStep: () => this.nextStep(index),
      };

      // FIXME этот style и div странный. Если забить на анимации можно было бы просто не рендерить
      return [
        <div key={index} style={ {display: controlProps.active ? 'block' : 'none'} } >
             { React.cloneElement(step, { ...controlProps, ...step.props }) }
        </div>
      ];
    });

    return (
      <div style={{marginTop: '20px'}}>
          form
          { steps }
      </div>
    );
  }
}

export default ProgressiveForm;
