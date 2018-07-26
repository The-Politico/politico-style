import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const Layout = () => (
  <section className='border-bottom'>
    <a name='layout' />
    <section>
      <h3>Spatial Units and how to use them</h3>
      <p className='sans'>Margin and padding are based on <code>.5rem</code> increments. This system, inspired by Buzzfeed's <a target='blank' href='https://solid.buzzfeed.com/layout.html'>solid</a> framework used a 6 step system from <br /> <code> 0 to 6</code>.</p>

      <div className='container content-fit'>
        <div className='row'>
          <table className='table table-bordered col-5'>
            <thead>
              <tr>
                <th>Spacial units</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>0</code></td>
                <td>= 0rem</td>
              </tr>
              <tr>
                <td><code>05</code></td>
                <td>= .25rem</td>
              </tr>
              <tr>
                <td><code>1</code></td>
                <td>= .5rem</td>
              </tr>
              <tr>
                <td><code>2</code></td>
                <td>= 1rem</td>
              </tr>
              <tr>
                <td><code>3</code></td>
                <td>= 1.5rem</td>
              </tr>
              <tr>
                <td><code>4</code></td>
                <td>= 2rem</td>
              </tr>
              <tr>
                <td><code>5</code></td>
                <td>= 2.5rem</td>
              </tr>
              <tr>
                <td><code>6</code></td>
                <td>= 3rem</td>
              </tr>
            </tbody>
          </table>

          <table className='table table-bordered offset-1 col-5'>
            <thead>
              <tr>
                <th>Directions</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>m</code></td>
                <td>margin</td>
              </tr>
              <tr>
                <td><code>p</code></td>
                <td>padding</td>
              </tr>
              <tr>
                <td><code>t</code></td>
                <td>top</td>
              </tr>
              <tr>
                <td><code>b</code></td>
                <td>bottom</td>
              </tr>
              <tr>
                <td><code>l</code></td>
                <td>left</td>
              </tr>
              <tr>
                <td><code>r</code></td>
                <td>right</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section>
      <h3>Now let's combine them</h3>
      <p className='sans'><code>Spacial units</code> and <code>directions</code> can be combined to deploy standard spacing between elements.</p>

      <p className='sans'>Our standard spacing between charts and section headers is <code>3rem</code>. A <code>section</code> tag will do this for you, but you can also bring this in by adding the class of <code>pt3</code>.</p>

      <h3 className='pt3'>Let's see it in action</h3>
      <Snippet
        snippet={`<h3 class="pt3">Note the class here</h3>
<p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>

<h3 class="pt3">Note the class here too</h3>
<p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <h3 className='pt3'>Note the class here</h3>
      <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>

      <h3 className='pt3'>Note the class here too</h3>
      <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
    </section>
  </section>
);

export default Layout;
