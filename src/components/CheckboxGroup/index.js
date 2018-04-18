// edited version from
// https://github.com/erikras/redux-form/issues/1037#issuecomment-243003954
// This is needed before CheckboxGroup will be in redux-form out of the box

import PropTypes from 'prop-types'

const CheckboxGroup = (props) => {
  const { name, options, input } = props;
  const {renderCheckbox, ...optionProps} = props;

  const checkboxes = options.map((option, i) => (
    renderCheckbox({
      ...optionProps,
      name: `${name}[${i}]`,
      key: i,
      label: option.label,
      onChange: (event) => {
        const copy = [...input.value];
        if (event.target.checked) {
          copy.push(option.value);
        } else {
          copy.splice(copy.indexOf(option.value), 1);
        }
        return input.onChange(copy);
      }
    })
  ));
  return checkboxes;
}

CheckboxGroup.propTypes = {
  options: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    // for using objects as values need update onChange function(check equality)
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    label: PropTypes.node,
  })).isRequired,
}


export default CheckboxGroup;
