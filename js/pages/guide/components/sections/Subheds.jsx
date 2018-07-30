import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const Subheds = () => (
  <section className='border-bottom'>
    <a name='subheds' />
    <section>
      <ul className='content-fit no-bullets border'>
        <li><h1 className='content-fit mb0'>This is an h1</h1></li>
        <li><h2>This is an h2</h2></li>
        <li><h3 className='mt0'>This is an h3</h3></li>
        <li><h4>This is an h4</h4></li>
        <li><h5 className='mb0'>This is an h5</h5></li>
        <li><span className='label'><h5 className='tag m0'>H5 as a tag</h5></span></li>
        <li><span className='label'><h5 className='tag outline m0'>H5 outline tag</h5></span></li>
        <li><h6>This is an h6</h6></li>
      </ul>
    </section>
    <section>
      <h2>This is an overall section of content, h2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

      <Snippet
        snippet={`<h2>This is an overall section of content, h2</h2>
<p>Lorem ipsum dolor sit amet...</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <h5 className='pt4'>H5 👍  for short labels</h5>
      <h3>This is a subsection of this content, h3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

      <Snippet
        snippet={`<h5 className='pt4'>H5 👍  for short labels</h5>
<h3>This is a subsection of this content, h3</h3>
<p>Lorem ipsum dolor sit amet...</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <span className='label content-fit'>
        <h5 className='tag'>This is a tag</h5>
      </span>
      <h3>This is a subsection of this content, h3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

      <Snippet
        snippet={`<span className='label content-fit'>
  <h5 className='tag'>This is a tag</h5>
</span>
<h3>This is a subsection of this content, h3</h3>
<p>Lorem ipsum dolor sit amet...</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <span className='label content-fit'>
        <h5 className='tag outline'>Tag outline</h5>
      </span>
      <h3>This is a subsection of this content, h3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

      <Snippet
        snippet={`<span className='label content-fit'>
  <h5 className='tag outline'>Tag outline</h5>
</span>
<h3>This is a subsection of this content, h3</h3>
<p>Lorem ipsum dolor sit amet...</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <h4 className='pt4'>This is an H4</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
    </section>
    <Snippet
      snippet={`<h4 class="pt4">This is an H4</h4>
<p>Lorem ipsum dolor sit amet...</p>
`}
      langauge='html'
      expandable={false}
      expanded
    />
    <section className='content-fit'>
      <h3>Tags</h3>
      <p>For tags you must first wrap them in a <code>span.label</code>. You can use the class <code>outline</code> to reverse out the tag.</p>
    </section>
  </section>
);

export default Subheds;
