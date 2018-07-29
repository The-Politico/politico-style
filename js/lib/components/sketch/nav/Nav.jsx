import React from 'react';

import HomeIcon from './../icons/Home';

const Nav = (props) => {
  return (
    <nav className='global'>
      <div className='header-left bt-icon--house'>
        <a href={props.homeLink}>
          <HomeIcon />
        </a>
      </div>
      <b className='bt-icon bt-icon--politico' />
      <span className='project-name'>
        / <a href={props.appLink}>{props.appName}</a>
      </span>
      {/* Users can supply their own buttons to the right container */}
      <div className='float-right'>
        {props.children}
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  appLink: './',
  appName: 'New project',
  homeLink: './../',
};

export default Nav;
