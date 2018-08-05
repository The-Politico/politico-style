// TODO
import React from 'react';

const Forms = () => (
  <section className="border-top">

    <h2 className='section-header'>Claim</h2>
    <div id='claim-shortText-container' className='form-group '>
      <label id='label-claim-shortText' htmlFor='claim-shortText'>Claim Summary</label>

      <input className='form-control' type='text' id='claim-shortText' placeholder='Enter a short description...' maxLength='75' data-key='claim_reviewed.short_text' required='' value='Lorem ipsum dolor sit amet.' />

      <small id='help-claim-shortText' className='form-text text-muted'>75 Character Limit</small>
    </div>
    <div id='claim-text-container' className='form-group'>

      <label id='label-claim-text' htmlFor='claim-text'>Full Claim</label>
      <textarea className='form-control' type='text' id='claim-text' s='3' placeholder='Enter a longer description...' data-key='claim_reviewed.text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </textarea>
    </div>

    <div id='claim-disinformationType-container' className='form-group '>

      <label id='label-claim-disinformationType' htmlFor='claim-disinformationType'>Disinformation Type</label>
      <select className='form-control' id='claim-disinformationType' data-key='claim_reviewed.disinformation_type' required=''>
        <option disabled='' hidden='' value=''>Choose a type...</option>
        <option value='2'>Hoax</option>
        <option value='1'>Lie</option>
      </select>
    </div>

    <div id='claim-canoncialUrl-container' className='form-group '>
      <label id='label-claim-canoncialUrl' htmlFor='claim-canoncialUrl'>Claim Link</label>
      <input className='form-control' type='url' id='claim-canoncialUrl' placeholder='Enter a link to this claim...' data-key='claim_reviewed.canoncial_url' required='' value='http://example.com' />
    </div>

    <div id='claim-mediaType-container' className='form-group '>
      <label id='label-claim-mediaType' htmlFor='claim-mediaType'>Media Type</label>
      <select className='form-control' id='claim-mediaType' data-key='claim_reviewed.media_type' required=''>
        <option disabled='' hidden='' value=''>Choose a type...</option>
        <option value='1'>Tweet</option>
        <option value='2'>Article</option>
      </select>
    </div>
  </section>
);

export default Forms;
