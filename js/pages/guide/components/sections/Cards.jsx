import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const Cards = () => {
  return (
    <section className='border-bottom'>
      <a name='cards' />

      <section>
        <h3 className='mb2'>Cards</h3>
        <p>Cards may be used as a starting point to a more modular design. They take images in the lede position, have <code>titles</code>, <code>subheds</code> and a <code>serif</code> style built in.</p>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <figure>
                <img src='http://images.politico.com/global/2013/02/14/130214_obama_palm_beach_ap_328.jpg' alt='Tropical beach' />
                <figcaption>This is the caption.</figcaption>
              </figure>
              <h3>Card Title</h3>
              <h4>Subtitle if needed</h4>
              <p>A variation of the <span className='highlight'>ordinary lorem</span> ipsum text has been used in typesetting since the 1960s or earlier,  by advertisements for Letraset transfer sheets or earlier,  by <span className='highlight'>advertisements</span> for Letraset transfer sheets.</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <h3 className='border-bottom'>Card Title</h3>
              <h4>Subtitle if needed</h4>
              <p>You can see the border-bottom style on the h2 here. Does what you would expect</p>

              <h4>Subtitle if needed</h4>
              <p>A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier by advertisements for Letraset transfer sheets.</p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card serif'>
              <h3 className='border-bottom'>Card Title</h3>
              <p>Look up! A serif style is appended to the card</p>

              <p>Does what you'd expect here too.</p>
            </div>
          </div>
        </div>
        <Snippet
          snippet={`<section>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <figure>
          <img src="http://images.politico.com/global/2013/02/14/130214_obama_palm_beach_ap_328.jpg" alt="tropical beach">
          <figcaption>This is the caption</figcaption>
        </figure>
        <h3>Card Title</h3>
        <h4>Subtitle if needed</h4>
        <p>A variation of the <span class="highlight">ordinary lorem</span> ipsum text has been used in typesetting since the 1960s or earlier,  by advertisements for Letraset transfer sheets or earlier,  by <span class="highlight">advertisements</span> for Letraset transfer sheets.</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <h3 class="border-bottom">Card Title</h3>
        <h4>Subtitle if needed</h4>
        <p>You can see the border-bottom style on the h2 here. Does what you would expect</p>

        <h4>Subtitle if needed</h4>
        <p>A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier by advertisements for Letraset transfer sheets.</p>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card serif">
        <h3>Card Title</h3>
        <p>Look up! A serif style is appended to the card</p>

        <p>Does what you’d expect here too.</p>
      </div>
    </div>
  </row>
</section>
          `}
          expandable={false}
          expanded
        />
      </section>
    </section>
  );
};

export default Cards;
