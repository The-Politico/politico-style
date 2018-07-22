import React from 'react';
import JsSnippet from 'LIB/snippets/JS';
import { Sketch } from 'lib';
const { Nav } = Sketch;

const snippet = `const { Nav } = Sketch;

<Nav
  appName='A New App'
  homeLink='./../'
  appLink='./'
>
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
</Nav>
`;

const NavComponent = () => (
  <div>
    <Nav appName='A New App'>
      <ul className='nav nav-pills'>
        <li className='nav-item'>
          <a className='nav-link active' href='#'>Active Link</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Link</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Link</a>
        </li>
      </ul>
    </Nav>
    <JsSnippet snippet={snippet} />
  </div>
);

export default NavComponent;
