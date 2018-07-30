import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ActiveBadge = () => (
  <span className='badge badge-light'>✓</span>
);

const PillFilter = (props) => {
  const { active } = props;
  const classes = classNames('filter', 'btn', { active });

  return (
    <button
      type='button'
      className={classes}
      onClick={props.onClick}
    >
      {props.children}
      {active && (<ActiveBadge />)}
    </button>
  );
};

PillFilter.defaultProps = {
  active: false,
};

PillFilter.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default PillFilter;
