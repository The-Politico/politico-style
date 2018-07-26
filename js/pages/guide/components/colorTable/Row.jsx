import React from 'react';
import CopyClick from 'LIB/components/snippets/CopyClick';

function cleanHex(hexString) {
  return hexString.replace('#', '');
}

const Row = (props) => {
  const { color } = props;
  const { hex, rgba } = color;

  const variables = color.variables.split(' ').map(variable => (
    <div>
      <CopyClick copy={variable}>{variable}</CopyClick>
    </div>
  ));

  return (
    <tr>
      <td>{variables}</td>
      <td>
        <span className='RepoImage'>
          <img src={`https://placehold.it/15/${cleanHex(hex)}/000000?text=+`} />
        </span>&nbsp;
        <CopyClick copy={hex}>
          <code>{hex}</code>
        </CopyClick>
      </td>
      <td>
        <CopyClick copy={rgba(255)}>{rgba(255)}</CopyClick>
      </td>
    </tr>
  );
};

export default Row;
