import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
      <h5 className='text-center'>{props.subhed}</h5>
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProps = {
  subhed: 'Welcome to',
  title: null,
};

Header.propTypes = {
  subhed: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
