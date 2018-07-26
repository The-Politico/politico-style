import React from 'react';
import CopyClick from 'LIB/components/snippets/CopyClick';

const Alignment = () => (
  <section className='border-bottom'>
    <a name='text-alignment' />
    <section>
      <h3 className='mb1'>Text Alignment</h3>
      <table className='table table-bordered content-fit'>
        <thead>
          <tr>
            <th>Type</th>
            <th>CSS Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text align left</td>
            <td>
              <CopyClick copy='text-left'>
                <code>text-left</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td>Text align right</td>
            <td>
              <CopyClick copy='text-right'>
                <code>text-right</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td>Text align center</td>
            <td>
              <CopyClick copy='text-center'>
                <code>text-center</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td>Text align X above small viewports</td>
            <td>
              <CopyClick copy='text-sm-X'>
                <code>text-sm-X</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td>Text align X above medium viewports</td>
            <td>
              <CopyClick copy='text-md-X'>
                <code>text-md-X</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td>Text align X above large viewports</td>
            <td>
              <CopyClick copy='text-lg-X'>
                <code>text-lg-X</code>
              </CopyClick>
            </td>
          </tr>
          <tr>
            <td>Text align X above extra large viewports</td>
            <td>
              <CopyClick copy='text-xl-X'>
                <code>text-xl-X</code>
              </CopyClick>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
);

export default Alignment;
