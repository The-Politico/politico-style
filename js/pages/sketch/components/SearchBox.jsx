// TODO
import React from 'react';

const SearchBox = () => (
  <section className="border-top">
    <h2 className='section-header'>Search box</h2>
  <div className='row justify-content-between content-fit search'>
    <div className='offset-sm-1 col-sm-9'>
      <input className='form-control' type='search' placeholder='Start with a suggestion' aria-label='Search' />
    </div>
    <div className='col-sm-2'>
      <button className='btn btn-outline-success ' type='submit'><b className='bt-icon bt-icon--search' /></button>
    </div>
  </div>
  </section>
);

export default SearchBox;
