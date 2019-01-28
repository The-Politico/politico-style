import {default as React, Fragment} from 'react';
import dateFns from 'date-fns';

const makeBylines = authors => {
  const output = authors.slice();
  const lastAuthor = output.pop();
  const secondToLastAuthor = output.pop();

  return (
    <Fragment>
      {output.map((author, i) =>
        <Fragment key={i}>
          <a href={author.link}><span className='byline' dangerouslySetInnerHTML={{__html: author.name}} /></a>,&nbsp;
        </Fragment>
      )}

      {secondToLastAuthor &&
        <Fragment>
          <a href={secondToLastAuthor.link}><span className='byline' dangerouslySetInnerHTML={{__html: secondToLastAuthor.name}} /></a>
          &nbsp;and&nbsp;
        </Fragment>
      }

      <a href={lastAuthor.link}><span className='byline' dangerouslySetInnerHTML={{__html: lastAuthor.name}} /></a>
    </Fragment>
  );
};

const formatDate = date => {
  if (typeof date === 'string') {
    const dateString = dateFns.format(new Date(date), 'MM/DD/YYYY H:mm A');
    return `${dateString} EST`;
  } else {
    return '';
  }
};

const Header = (props) => {
  return (
    <header className='center'>
      <div className='share'>
        <a href='' className='bt-icon custom-icon--facebook' target='_blank'>
          <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xlinkHref='http://www.w3.org/1999/xlink' width='14' height='14' fill='white' viewBox='0 0 15 15'>
            <path d='M9.229 15.988h-3.305v-7.989h-1.652v-2.754h1.652v-1.653c0-2.246 0.932-3.582 3.581-3.582h2.206v2.754h-1.378c-1.031 0-1.1 0.385-1.1 1.103l-0.004 1.378h2.498l-0.292 2.754h-2.206v7.989z' />
          </svg>
        </a>
        <a href='' className='bt-icon bt-icon--twitter' target='_blank' />
        <a href='' className='bt-icon bt-icon--mail' target='_blank' />
      </div>
      <p className='category'>
        <a href={props.section.link} target='_blank'>{props.section.name}</a>
      </p>
      <h1>
        {props.headline}
      </h1>
      <p className='subhead'>
        {props.deck}
      </p>
      <div className='info'>
        <p>
          {props.authors && props.authors.length > 0 && <span className='authors'> By {makeBylines(props.authors)}</span> } {props.published && <span className='timestamp'> | <time dateTime={props.published}>{formatDate(props.published)}</time></span> } {props.updated && <span className='updated'>| <time dateTime={props.updated}>Updated {formatDate(props.updated)}</time></span>}
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
  headline: 'Your pithy, compelling headline, would you share it?',
  deck: 'Short deck',
  published: null,
  updated: null,
  authors: [],
};

export default Header;
