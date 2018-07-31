// TODO
import React from 'react';

const Tags = () => (
  <section className="border-top">
    <h2 className='section-header'>Tags</h2>
    <div id='check-tags-container' className='row'>
      <div id='check-tags' className='tagContainer'>
        <div className='ReactTags__tags'>
          <div className='ReactTags__selected'><span className='ReactTags__tag' draggable='true' style={{opacity: 1}}>Trump<a className='ReactTags__remove'>×</a></span>
            <span className='ReactTags__tag' draggable='true' style={{opacity: 1}}>Lorem<a className='ReactTags__remove'>×</a></span>

            <div className='ReactTags__tagInput mt2'><input className='ReactTags__tagInputField' type='text' placeholder='Add new tag' aria-label='Add new tag' value='' /></div>
          </div>
        </div>
      </div>
      <small id='help-check-tags' className='form-text text-muted'>Separate tags by comma.</small>
    </div>
  </section>
);

export default Tags;
