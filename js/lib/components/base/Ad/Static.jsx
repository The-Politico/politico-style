import React from 'react';

const Ad = (props) => (
  <div className='content-group ad screenshot-remove'>
    <p>Advertisement</p>
    <div className='ad-slot flex horizontal' id={props.adID} />
  </div>
);

Ad.defaultProps = {
  adID: 'pol-02',
};

export default Ad;
