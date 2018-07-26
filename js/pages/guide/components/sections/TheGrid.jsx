import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const TheGrid = () => (
  <section className='border-bottom'>
    <a name='the-grid' />
    <section className='content-fit'>
      <h3>The Grid</h3>
      <p>The grid system we use is based off of <code>Bootstrap 4.0</code> — read the documentation <a target='blank' href='https://getbootstrap.com/docs/4.0/layout/grid/'>here</a>.</p>
      <p>Each column must be in a <code>row</code> inside of a <code>container</code></p>

      <div className='container pb3'>
        <div className='row'>
          <div className='col-sm p1 border'>
            One of three columns
          </div>
          <div className='col-sm p1 border'>
            One of three columns
          </div>
          <div className='col-sm p1 border'>
            One of three columns
          </div>
        </div>
      </div>
      <Snippet
        snippet={`<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <section>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th />
              <th className='text-center'>
              Extra small<br />
                <small>&lt;576px</small>
              </th>
              <th className='text-center'>
              Small<br />
                <small>≥576px</small>
              </th>
              <th className='text-center'>
              Medium<br />
                <small>≥768px</small>
              </th>
              <th className='text-center'>
              Large<br />
                <small>≥992px</small>
              </th>
              <th className='text-center'>
              Extra large<br />
                <small>≥1200px</small>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='text-nowrap' scope='row'>Max container width</th>
              <td>None (auto)</td>
              <td>540px</td>
              <td>720px</td>
              <td>960px</td>
              <td>1140px</td>
            </tr>
            <tr>
              <th className='text-nowrap' scope='row'>Class prefix</th>
              <td><code>.col-</code></td>
              <td><code>.col-sm-</code></td>
              <td><code>.col-md-</code></td>
              <td><code>.col-lg-</code></td>
              <td><code>.col-xl-</code></td>
            </tr>
            <tr>
              <th className='text-nowrap' scope='row'># of columns</th>
              <td colSpan='5'>12</td>
            </tr>
            <tr>
              <th className='text-nowrap' scope='row'>Gutter width</th>
              <td colSpan='5'>30px (15px on each side of a column)</td>
            </tr>
            <tr>
              <th className='text-nowrap' scope='row'>Nestable</th>
              <td colSpan='5'>Yes</td>
            </tr>
            <tr>
              <th className='text-nowrap' scope='row'>Column ordering</th>
              <td colSpan='5'>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </section>
);

export default TheGrid;
