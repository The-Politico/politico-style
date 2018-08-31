import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const inputProps = Object.assign({}, props);

  delete inputProps.help;
  delete inputProps.label;
  delete inputProps.wrapperClassName;

  inputProps.className = 'form-control ' + props.className;
  const wrapperClassName = 'form-group ' + props.wrapperClassName;

  return (
    <div id={`container-${props.id}`} className={wrapperClassName}>

      { props.label.length > 0 &&
        <label id={`label-${props.id}`} htmlFor={props.id}>
          {props.label}
        </label>
      }

      { props.type === 'textarea' &&
        <textarea {...inputProps} />
      }

      { props.type !== 'textarea' &&
        <input {...inputProps} />
      }

      { props.help.length > 0 &&
        <small id={`help-${props.id}`} className='form-text text-muted'>
          {props.help}
        </small>
      }
    </div>
  );
};

TextInput.defaultProps = {
  id: '',
  className: '',
  wrapperClassName: '',
  help: '',
  label: '',
  value: '',
};

TextInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.oneOf([
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'textarea',
    'time',
    'url',
    'week',
  ]),
  autocomplete: PropTypes.oneOf(['on', 'off']),
  autofocus: PropTypes.bool,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  max: PropTypes.string,
  maxlength: PropTypes.number,
  min: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  size: PropTypes.number,
  step: PropTypes.number,
  wrap: PropTypes.oneOf(['hard', 'soft']),
};

export default TextInput;
