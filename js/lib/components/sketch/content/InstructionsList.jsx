import React from 'react';

const InstructionsList = (props) => {
  return (
    <section>
      <ol className='instructions'>
        {props.children}
      </ol>
    </section>
  );
};

export default InstructionsList;
