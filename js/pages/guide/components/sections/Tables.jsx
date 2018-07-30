import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const Tables = () => {
  return (
    <section className='border-bottom'>
      <a name='tables' />
      <section className='content-fit'>
        <h3 className='mb1'>Tables</h3>
        <p>Our tables are built off of the bootstrap styles seen <a target='blank' href='https://getbootstrap.com/docs/4.0/content/tables/'>here</a>.</p>

        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col'>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Carrie</td>
              <td>Buddoff Brown</td>
              <td><a href='https://twitter.com/cbudoffbrown'>@cbudoffbrown</a></td>
            </tr>
            <tr />  <th scope='row'>2</th>
            <td>Paul</td>
            <td>Volpe</td>
            <td><a href='https://twitter.com/pvolpe'>@pvolpe</a></td>
          </tbody>
        </table>
        <Snippet
          snippet={`<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Carrie</td>
      <td>Buddoff Brown</td>
      <td><a href="https://twitter.com/cbudoffbrown">@cbudoffbrown</a></td>
    </tr>
    <tr>

    </tr>  <th scope="row">2</th>
      <td>Paul</td>
      <td>Volpe</td>
      <td><a href="https://twitter.com/pvolpe">@pvolpe</a></td>
  </tbody>
</table>
`}
          expandable={false}
          expanded
        />
      </section>
      <section className='content-fit'>

        <h3 className='mb1'>Some other options</h3>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Type</th>
              <th scope='col'>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bordered</td>
              <td><code>table-bordered</code></td>
            </tr>
            <tr>
              <td>Striped</td>
              <td><code>table-striped</code></td>
            </tr>
            <tr>
              <td>Hover</td>
              <td><code>table-hover</code></td>
            </tr>
            <tr>
              <td>Condensed padding</td>
              <td><code>table-sm</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Tables;
