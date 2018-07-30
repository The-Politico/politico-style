import React from 'react';

import ResponsiveNav from './rail/ResponsiveNav';

const SideNav = () => (
  <ResponsiveNav>
    <h5 className='mini-header'>Themes</h5>
    <li>
      <a href='#themes'>Getting started</a>
    </li>
    <h5 className='mini-header'>Accessiblity</h5>
    <li>
      <a href='#accessibility'>Best Practices</a>
    </li>
    <h5 className='mini-header'>Layout</h5>
    <li>
      <a href='#breakpoints'>Breakpoints</a>
    </li>
    <li>
      <a href='#the-grid'>The Grid</a>
    </li>
    <li>
      <a href='#layout'>Standard Spacing</a>
    </li>
    <h5 className='mini-header'>Typography</h5>
    <li>
      <a href='#fonts'>Fonts</a>
    </li>
    <li>
      <a href='#header'>Header</a>
    </li>
    <li>
      <a href='#subheds'>Subheds & Tags</a>
    </li>
    <li>
      <a href='#paragraphs'>Paragraphs</a>
    </li>
    <li>
      <a href='#text-alignment'>Text Alignment</a>
    </li>
    <h5 className='mini-header'>Color Palettes</h5>
    <li>
      <a href='#brand-colors'>Brand</a>
    </li>
    <li>
      <a href='#base-colors'>Base</a>
    </li>
    <li>
      <a href='#election-colors'>Elections</a>
    </li>
    <li>
      <a href='#qualitative-colors'>Qualitative</a>
    </li>
    <li>
      <a href='#diverging-colors'>Diverging</a>
    </li>
    <li>
      <a href='#sequential-colors'>Sequential</a>
    </li>
    <li>
      <a href='#working-with-colors'>Working with Colors</a>
    </li>
    <h5 className='mini-header'>Iconography</h5>
    <li>
      <a href='#icons'>Icons</a>
    </li>
    <h5 className='mini-header'>Components</h5>
    <li>
      <a href='#lists'>Lists</a>
    </li>
    <li>
      <a href='#tables'>Tables</a>
    </li>
    <li>
      <a href='#photos'>Photos</a>
    </li>
    <li>
      <a href='#cards'>Cards</a>
    </li>
  </ResponsiveNav>
);

export default SideNav;
