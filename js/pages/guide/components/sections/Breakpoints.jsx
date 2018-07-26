import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import CopyClick from 'LIB/components/snippets/CopyClick';

const Breakpoints = () => (
  <section className='border-bottom'>
    <a name='breakpoints' />
    <section className='content-fit'>
      <h3 className='pt3'>Breakpoints</h3>
      <p className='sans'>More than 63% of our audience comes to us via a mobile device. We prioritize those readers by using <code>min-width</code>.</p>

      <h3 className='pt3'>Wait, how do min-width breakpoints work again?</h3>
      <p className='sans'>The base level css you're writing defaults to the smallest boostrap dedault breakpoint <code>min-width:576px</code>. We've added another breakpoint for very small phones, which you'll need to define as needed <code>min-width:350px</code></p>

      <h3 className='pt3'>Let's look an an example</h3>
      <p className='sans'>This means any screen bigger than 992px, the <code>h2</code> will be aligned center.</p>
      <Snippet
        snippet={`@media (min-width: 992px) {
      h2{
        text-align: center;
      }
 }
`}
        langauge='scss'
        expandable={false}
        expanded
      />

      <h3 className='pt3'>CSS <code>variables</code></h3>
      <table className='table table-bordered content-fit'>
        <thead>
          <tr>
            <th>Name</th>
            <th>@media Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CopyClick copy={`min-width-xs`}>
                <code>min-width-xs</code>
              </CopyClick>
            </td>
            <td>
              <CopyClick
                copy={`@media (min-width: 350px) { ... }`}
              >(min-width: 350px)</CopyClick>
            </td>
          </tr>
          <tr>
            <td>
              <CopyClick copy={`min-width-sm`}>
                <code>min-width-sm</code>
              </CopyClick>
            </td>
            <td>
              <CopyClick
                copy={`@media (min-width: 576px) { ... }`}
              >(min-width: 576px)</CopyClick>
            </td>
          </tr>
          <tr>
            <td>
              <CopyClick copy={`min-width-md`}>
                <code>min-width-md</code>
              </CopyClick>
            </td>
            <td>
              <CopyClick
                copy={`@media (min-width: 768px) { ... }`}
              >(min-width: 768px)</CopyClick>
            </td>
          </tr>
          <tr>
            <td>
              <CopyClick copy={`min-width-lg`}>
                <code>min-width-lg</code>
              </CopyClick>
            </td>
            <td>
              <CopyClick
                copy={`@media (min-width: 992px) { ... }`}
              >(min-width: 992px)</CopyClick>
            </td>
          </tr>
          <tr>
            <td>
              <CopyClick copy={`min-width-xl`}>
                <code>min-width-xl</code>
              </CopyClick>
            </td>
            <td>
              <CopyClick
                copy={`@media (min-width: 1200px) { ... }`}
              >(min-width: 1200px)</CopyClick>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
);

export default Breakpoints;
