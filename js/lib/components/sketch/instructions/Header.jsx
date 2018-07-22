import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h5 className='text-center'>{props.subhed}</h5>
      <h1 className='courier'>{props.appName}</h1>
    </header>
  );
};

Header.defaultProps = {
  subhed: 'Welcome to',
  appName: 'A New App',
};

export default Header;
