import React from 'react';
import PropTypes from 'prop-types';

import {Typeahead as TypeaheadInput} from 'react-bootstrap-typeahead';

const Typeahead = (props) => {
  const inputProps = Object.assign({}, props);

  delete inputProps.help;
  delete inputProps.label;
  delete inputProps.wrapperClassName;

  inputProps.className = 'form-control ' + props.className;
  const wrapperClassName = 'form-group typeahead' + props.wrapperClassName;

  return (
    <div id={`container-${props.id}`} className={wrapperClassName}>

      { props.label.length > 0 &&
        <label id={`label-${props.id}`} htmlFor={props.id}>
          {props.label}
        </label>
      }

      <TypeaheadInput
        menuId={props.id}
        {...inputProps}
      />

      { props.help.length > 0 &&
        <small id={`help-${props.id}`} className='form-text text-muted'>
          {props.help}
        </small>
      }
    </div>
  );
};

Typeahead.defaultProps = {
  id: '',
  className: '',
  wrapperClassName: '',
  help: '',
  label: '',
};

Typeahead.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string,
};

export default Typeahead;
