import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import CopyClick from 'LIB/components/snippets/CopyClick';

const Paragraphs = () => (
  <section className='border-bottom'>
    <a name='paragraphs' />
    <section>
      <h3>Let's talk about paragraphs</h3>
      <p>In most cases we'll use the standard <code>Georgia</code> text. We'll depart from that when we're writing primarily <span className='sans'>graphic</span> paragraph text.</p>

      <p>You'll notice a few variations you can use in the table below</p>
    </section>

    <table className='table table-bordered content-fit'>
      <thead>
        <tr>
          <th>CSS Class</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <CopyClick copy='small'>
              <code>small</code>
            </CopyClick>
          </td>
          <td>Small <strong>Georgia</strong> type</td>
        </tr>
        <tr>
          <td>
            <CopyClick copy='sans'>
              <code>sans</code>
            </CopyClick>
          </td>
          <td>Sans <strong>Din 2014</strong> type</td>
        </tr>
        <tr>
          <td>
            <CopyClick copy='small sans'>
              <code>small sans</code>
            </CopyClick>
          </td>
          <td>Small <strong>Din 2014</strong> type</td>
        </tr>

      </tbody>
    </table>

    <section>
      <h5>Standard paragraph</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

      <Snippet
        snippet={`<h5>Standard paragraph</h5>
<p>Lorem ipsum dolor sit amet...</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <h5 className='pt4'><code>.small</code></h5>
      <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

      <Snippet
        snippet={`<h5><code>.small</code></h5>
<p class="small">Lorem ipsum dolor sit amet...</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <h5 className='pt4'><code>.sans</code></h5>
      <p className='sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

      <Snippet
        snippet={`<h5><code>.sans</code></h5>
<p class="sans">Lorem ipsum dolor sit amet...</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <h5 className='pt4'><code>.small.sans</code></h5>
      <p className='small sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

      <Snippet
        snippet={`<h5><code>.small .sans</code></h5>
<p class="small sans">Lorem ipsum dolor sit amet...</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

    </section>
  </section>
);

export default Paragraphs;
