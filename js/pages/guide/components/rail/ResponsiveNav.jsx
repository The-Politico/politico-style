import React from 'react';

class ResponsiveNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (
      <nav className='side-nav'>
        <h4 className='mt5'>
          <b
            style={{color: '#dc0228'}}
            className='small bt-icon bt-icon--politico'
          />
        </h4>
        <ul>
          {this.props.children}
        </ul>
      </nav>
    );
  }
}

export default ResponsiveNav;
