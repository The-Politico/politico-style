import React from 'react';

const Navigation = () => {
  return (
    <nav title='navigation' className='global'>
      <div id='global-header'>
        <div id='header-contents'>
          <div id='global-branding'>
            <div id='global-branding'>
              <a className='navbar-brand' href='https://www.politico.com/' title='POLITICO' target='_top'>
                <span className='bt-icon bt-icon--politico' />
              </a>
            </div>
          </div>

          <nav id='nav-micro' role='home'>
            <div className='header-content'>
              <div className='header-left'>
                <a href='https://www.politico.com'>
                  <svg xmlns='http://www.w3.org/2000/svg' height='20px' version='1.1' x='0px' y='0px' viewBox='0 0 100 100' enableBackground='new 0 0 100 100' xmlSpace='preserve'><path d='M79.5,81.458h-57V41.27L51,16.729L79.5,41.27V81.458z M25.5,78.458h51V42.646L51,20.688L25.5,42.646V78.458z' />
                  </svg>
                </a>
              </div>

              <div className='header-right'>
                <ul className='micro-list'>
                  <li className='subnav d-none d-sm-block'><a href='https://www.politico.com/magazine/' target='_top'>Mag<span className='d-sm-none d-md-none'>azine</span></a></li>
                  <li className='subnav d-none d-sm-block'><a href='https://www.politico.com/agenda/' target='_top'><span className='d-sm-none'>The</span> Agenda</a></li>
                  <li className='subnav'><a href='https://www.politicopro.com' target='_top'>PRO</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
