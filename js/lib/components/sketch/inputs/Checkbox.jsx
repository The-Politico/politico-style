import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => (
  <div className='custom-control custom-checkbox'>
    <input
      type='checkbox'
      className='custom-control-input'
      id={'checkbox_' + props.name}
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
    <label
      className='custom-control-label'
      htmlFor={'checkbox_' + props.name}
    >{props.children}</label>
  </div>
);

Checkbox.defaultProps = {
  checked: false,
  name: null,
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
