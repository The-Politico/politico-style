import React from 'react';

const Comments = (props) => (
  <section className='comments'>
    <div className='fb-comments' data-href={`https://www.politico.com/${props.publishPath}`} data-numposts='5' />
    <div id='fb-root' />
  </section>

);

Comments.defaultProps = {
  publishPath: '',
};

export default Comments;
