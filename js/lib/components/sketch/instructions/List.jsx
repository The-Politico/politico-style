import React from 'react';

const List = (props) => {
  return (
    <section>
      <ol className='instructions'>
        {props.children}
      </ol>
    </section>
  );
};

export default List;
