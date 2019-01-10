import React from 'react';

const Header = (props) => {
  return (
    <header className='center'>
      <div className='share'>
        <a href='' className='bt-icon custom-icon--facebook' target='_blank'>
          <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnXlink='http://www.w3.org/1999/xlink' width='14' height='14' fill='white' viewBox='0 0 15 15'>
            <path d='M9.229 15.988h-3.305v-7.989h-1.652v-2.754h1.652v-1.653c0-2.246 0.932-3.582 3.581-3.582h2.206v2.754h-1.378c-1.031 0-1.1 0.385-1.1 1.103l-0.004 1.378h2.498l-0.292 2.754h-2.206v7.989z' />
          </svg>
        </a>
        <a href='' className='bt-icon bt-icon--twitter' target='_blank' />
        <a href='' className='bt-icon bt-icon--mail' target='_blank' />
      </div>
      <p className='category'>
        <a href={props.section.link} target='_blank'>Category title</a>
      </p>
      <h1>
          Your pithy, compelling headline, would you share it?
      </h1>
      <p className='subhead'>
                Short subhead
      </p>
      <div className='info'>
        <p>
                By <span className='byline'><a href='###'>First Lastname</a></span> and <span className='byline'><a href='###'>First Lastname</a></span> | <span className='timestamp'> <time dateTime='{{META.timestamp}}'> 04/05/2018 05:00 AM EDT</time></span>
        </p>
      </div>
    </header>
  );
};

Header.defaultProps = {
  section: {
    name: 'Section title',
    link: 'https://www.politico.com',
  },
  hed: 'Your pithy, compelling headline, would you share it?',
  deck: 'Short deck',
  timestamp: null,
  authors: [{
    byline: 'Jane Doe',
    link: 'https://www.twitter.com/jd/',
  }],
};

export default Header;
