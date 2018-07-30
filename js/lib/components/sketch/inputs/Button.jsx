import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {outline, type} = props;

  const classes = classNames('btn', {
    'btn-primary': !outline && type === 'primary',
    'btn-outline-primary': outline && type === 'primary',
    'btn-secondary': !outline && type === 'secondary',
    'btn-outline-secondary': outline && type === 'secondary',
    'btn-dark': !outline && type === 'dark',
    'btn-outline-dark': outline && type === 'dark',
  });

  return (
    <button
      type='button'
      className={classes}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  outline: false,
  type: 'primary',
};

Button.propTypes = {
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'dark']),
  onClick: PropTypes.func,
};

export default Button;
