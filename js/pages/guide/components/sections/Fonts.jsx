import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import CopyClick from 'LIB/components/snippets/CopyClick';

const Fonts = () => (
  <section className='border-bottom'>
    <a name='fonts' />
    <section>
      <h3 className='mb1'>Fonts</h3>
      <p>Our stadard typekit has one font, Din 2014. This typekit is included by default in your generator.</p>

      <Snippet
        snippet={`<link rel="stylesheet" href="https://use.typekit.net/dsx2uhv.css" />
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <p className='jubilat light'>To include Jubilat on your page, add this typekit</p>

      <Snippet
        snippet={`<link rel="stylesheet" href="https://use.typekit.net/bvr3gvp.css" />
`}
        langauge='html'
        expandable={false}
        expanded
      />

      <h3 className='mb1 mt4'>Fonts</h3>
      <table className='table table-bordered content-fit'>
        <thead>
          <tr>
            <th>Name</th>
            <th>CSS Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='sans'>Din 2014</td>
            <td>
              <CopyClick copy='sans'>
                <code>sans</code>
              </CopyClick>
              <CopyClick copy='headline'>
                <code>headline</code>
              </CopyClick>
              <CopyClick copy='graphic-text'>
                <code>graphic-text</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td className='serif'>Georgia</td>
            <td>
              <CopyClick copy='serif'>
                <code>serif</code>
              </CopyClick>
              <CopyClick copy='georgia'>
                <code>georgia</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td className='jubilat'>Jubilat</td>
            <td>
              <CopyClick copy='mag'>
                <code>mag</code>
              </CopyClick>
              <CopyClick copy='jubilat'>
                <code>jubilat</code>
              </CopyClick>
              <CopyClick copy='headline.mag'>
                <code>headline.mag</code>
              </CopyClick>
            </td>
          </tr>

        </tbody>
      </table>

      <h3 className='mb1 mt4'>Variables</h3>
      <table className='table table-bordered content-fit'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Variable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='sans'>Din 2014</td>
            <td>
              <CopyClick copy='$din'>
                <code>$din</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td className='serif'>Georgia</td>
            <td>
              <CopyClick copy='$georgia'>
                <code>$georgia</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td className='jubilat'>Jubilat</td>
            <td>
              <CopyClick copy='$jubilat'>
                <code>$jubilat</code>
              </CopyClick>
            </td>
          </tr>

        </tbody>
      </table>

      <h3 className='mb1 mt4'>Weights</h3>
      <table className='table table-bordered content-fit'>
        <thead>
          <tr>
            <th>Name</th>
            <th>CSS Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className='lighter'>lighter, 200</span></td>
            <td>
              <CopyClick copy='lighter'>
                <code>lighter</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td><span className='light'>Light, 300</span></td>
            <td>
              <CopyClick copy='light'>
                <code>light</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td><span className='normal'>Normal, 500</span></td>
            <td>
              <CopyClick copy='normal'>
                <code>normal</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td><span className='bold'>Bold, 700</span></td>
            <td>
              <CopyClick copy='bold'>
                <code>bold</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td><span className='bolder'>Bolder, 900</span></td>
            <td>
              <CopyClick copy='bolder'>
                <code>bolder</code>
              </CopyClick>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className='mb1 mt4'>Style</h3>
      <table className='table table-bordered content-fit'>
        <thead>
          <tr>
            <th>Name</th>
            <th>CSS Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='italic'>italic</td>
            <td>
              <CopyClick copy='italic'>
                <code>italic</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td className='underline'>underline</td>
            <td>
              <CopyClick copy='underline'>
                <code>underline</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td className='uppercase'>uppercase</td>
            <td>
              <CopyClick copy='uppercase'>
                <code>uppercase</code>
              </CopyClick>
            </td>
          </tr>
        </tbody>
      </table>

    </section>
  </section>
);

export default Fonts;
