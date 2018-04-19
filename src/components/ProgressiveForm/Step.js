import React from 'react';
import PropTypes from 'prop-types';

// TODO use css-modules
import './index.css';

const Step = (props) => {
  const { children, nextStep, render } = props;
  const contentFn = children || render;
  return (
    <div className="formStep">
      {contentFn(nextStep)}
    </div>
  );
};

Step.propTypes = {
  nextStep: PropTypes.func,
  children: PropTypes.func,
  render: PropTypes.func,
};

export default Step;
