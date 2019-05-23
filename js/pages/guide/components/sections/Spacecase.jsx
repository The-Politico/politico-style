import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const Spacecase = () => (
  <section className='border-bottom'>
    <a name='spacecase' />
    <a name='text-alignment' />
    <section>
      <h3 className='mb1'>Using Spacecase™</h3>
      <p>
        We use spacecase throughout builds to stylize label text. When applied
        to an element the letter spacing is set to <code>0.21em</code> or 0.21px
        the relative font size of its nearest parent.
      </p>
      <p>
        Spacecase defaults to uppercase and should be used on short snippets of
        text with few exceptions (to be decided on an individual basis). There
        in an override available <code>sentence-case</code> which removes the
        text-transformation, but is not recommended.
      </p>
      <p className='spacecase standard mt3 mb3'>
        This line uses the standard spacecase
      </p>
      <Snippet
        snippet={`<p classname="spacecase standard">This header uses spacecase</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <p>
        Spacecase™ comes with the following styles. For instance, applying a{' '}
        <code>standard</code> matches the <code>h5</code> used around the site.
      </p>

      <div className='container content-fit'>
        <div className='row'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Class</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>standard</code>
                </td>
                <td>Matches the h5 style at .075rem</td>
              </tr>
              <tr>
                <td>
                  <code>larger</code>
                </td>
                <td>Boosts text to 1rem</td>
              </tr>
              <tr>
                <td>
                  <code>sentence-case</code>
                </td>
                <td>Kills uppercase transform *use sparingly*</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </section>
);

export default Spacecase;
