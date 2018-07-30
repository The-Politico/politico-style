import React from 'react';
import Row from './Row';

const Table = (props) => {
  const colorRows = props.colors.all.map(color => <Row color={color} />);
  return (
    <table className='table content-fit table-bordered'>
      <thead>
        <tr>
          <th>SCSS</th>
          <th>Hex</th>
          <th>RGBA</th>
        </tr>
      </thead>
      <tbody>
        {colorRows}
      </tbody>
    </table>
  );
};

export default Table;
