import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = (props) => {
  return (
    <div className='custom-control custom-radio'>
      <input
        name={props.name}
        id={props.id}
        type='radio'
        className='custom-control-input'
        checked={props.checked}
        onChange={props.onChange}
      />
      <label
        className='custom-control-label'
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </div>
  );
};

RadioButton.defaultProps = {
  checked: false,
  name: null,
  id: null,
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;

export const RadioGroup = (name) => (props) => <RadioButton name={name} {...props} />;
