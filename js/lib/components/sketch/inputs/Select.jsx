import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const inputProps = Object.assign({}, props);

  delete inputProps.help;
  delete inputProps.label;
  delete inputProps.wrapperClassName;
  delete inputProps.options;
  delete inputProps.placeholder;

  inputProps.className = 'form-control ' + props.className;
  const wrapperClassName = 'form-group ' + props.wrapperClassName;

  return (
    <div id={`container-${props.id}`} className={wrapperClassName}>

      { props.label.length > 0 &&
        <label id={`label-${props.id}`} htmlFor={props.id}>
          {props.label}
        </label>
      }

      <select
        value={props.value}
        {...inputProps}
      >
        <option disabled hidden key='0' value=''>
          {props.placeholder}
        </option>
        {props.options.map(
          (option, idx) =>
            <option key={idx + 1} value={option.id}>
              {option.label}
            </option>
        )}
      </select>

      { props.help.length > 0 &&
        <small id={`help-${props.id}`} className='form-text text-muted'>
          {props.help}
        </small>
      }
    </div>
  );
};

Select.defaultProps = {
  id: '',
  className: '',
  wrapperClassName: '',
  help: '',
  label: '',
  value: '',
  placeholder: '',
  options: [],
};

Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  placeholder: PropTypes.string,
  options: PropTypes.array,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.number,
};

export default Select;
