import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const Accessiblity = () => (
  <section className='border-bottom'>
    <a name='lists' />
    <section className='content-fit pt2'>
      <h3>Unordered lists</h3>

      <code>no-bullets no-indent border</code>
      <ul className='no-bullets no-indent border'>
        <li>First item in this list</li>
        <li>Second item in this list</li>
        <li>Third item in this list</li>
      </ul>

      <br />
      <code>no-bullets no-indent</code>
      <ul className='no-bullets no-indent'>
        <li>First item in this list</li>
        <li>Second item in this list</li>
        <li>Third item in this list</li>
      </ul>

      <br />
      <code>no classes applied</code>
      <ul>
        <li>First item in this list</li>
        <li>Second item in this list</li>
        <li>Third item in this list</li>
      </ul>
      <h3>Ordered lists</h3>
      <code>no classes applied</code>
      <ol>
        <li>First item in this list</li>
        <li>Second item in this list</li>
        <li>Third item in this list</li>
      </ol>
      <Snippet
        snippet={`<ul class="no-bullets no-indent border">
  <li>First item in this list</li>
  <li>Second item in this list</li>
  <li>Third item in this list</li>
</ul>`}
        expanded
        expandable={false}
      />
    </section>

  </section>
);

export default Accessiblity;
