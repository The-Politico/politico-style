import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const Photos = () => {
  return (
    <section className='border-bottom'>
      <a name='photos' />

      <section>
        <h3 className='mb2'>Photos</h3>
        <p>Be sure to use descriptive alt tags in order to make our content accesible to all readers.</p>
        <p>Sometime we use photos alone, fullbleed or even side by side as diptychs or triptych. To create a <code>diptych</code> or <code>triptych</code>, simply wrap your photo groups in a div with that class. On the phone, the images will stack.</p>

        <table className='table table-bordered content-fit mb5'>
          <h3 className='mb1 mt4'>Photo options</h3>
          <thead>
            <tr>
              <th>Option</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Edge to edge on the phone</td>
              <td>On the figure, place this class: <code>no-gutters-phone</code></td>
            </tr>
            <tr>
              <td>Fullbleed on desktop</td>
              <td>You must close the article before the figure and reopen it after the figure.</td>
            </tr>

          </tbody>
        </table>

        <div className='row content-large'>
          <h2>Full size photo</h2>
          <figure>
            <img src='https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg' alt='Trump sign in a rural field.' />
            <figcaption>This is the caption.</figcaption>
          </figure>
          <Snippet
            snippet={`</article>
<figure class="no-gutters-phone">
  <img src="http://images.politico.com/global/2013/02/14/130214_obama_palm_beach_ap_328.jpg" alt="Tropical beach">
  <figcaption>This is the caption.</figcaption>
</figure>
<article class="container">
            `}
            expandable={false}
            expanded
          />
        </div>

        <div className='row content-large'>
          <h2>Diptych</h2>
          <div className='diptych'>
            <figure>
              <img src='https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg' alt='Trump sign in a rural field.' />
              <figcaption className='figcaption'>
              Caption text here.
                <figcredit> | John Shinkle/POLITICO </figcredit>
              </figcaption>
            </figure>

            <figure>
              <img src='https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg' alt='Trump sign in a rural field.' />
              <figcaption className='figcaption'>
              Caption text here.
                <figcredit> | John Shinkle/POLITICO </figcredit>
              </figcaption>
            </figure>
            <div className='clear' />
          </div>
          <Snippet
            snippet={`<div class="diptych">
  <figure>
  <img src="https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg" />
  <figcaption class="figcaption">
  Caption text here.
  <figcredit> | John Shinkle/POLITICO </figcredit>
  </figcaption>
  </figure>

  <figure>
  <img src="https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg" />
  <figcaption class="figcaption">
  Caption text here.
  <figcredit> | John Shinkle/POLITICO </figcredit>
  </figcaption>
  </figure>
  <div class="clear"></div>
</div>
            `}
            expandable={false}
            expanded
          />
        </div>

        <div className='row content-large'>
          <h2>Triptych</h2>
          <div className='triptych'>
            <figure>
              <img src='https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg' alt='Trump sign in a rural field.' />
              <figcaption className='figcaption'>
              Caption text here.
                <figcredit> | John Shinkle/POLITICO </figcredit>
              </figcaption>
            </figure>

            <figure>
              <img src='https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg' alt='Trump sign in a rural field.' />
              <figcaption className='figcaption'>
              Caption text here.
                <figcredit> | John Shinkle/POLITICO </figcredit>
              </figcaption>
            </figure>

            <figure>
              <img src='https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg' alt='Trump sign in a rural field.' />
              <figcaption className='figcaption'>
              Caption text here.
                <figcredit> | John Shinkle/POLITICO </figcredit>
              </figcaption>
            </figure>
            <div className='clear' />
          </div>
          <Snippet
            snippet={`<div class="triptych">
  <figure>
  <img src="https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg" />
  <figcaption class="figcaption">
  Caption text here.
  <figcredit> | John Shinkle/POLITICO </figcredit>
  </figcaption>
  </figure>

  <figure>
  <img src="https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg" />
  <figcaption class="figcaption">
  Caption text here.
  <figcredit> | John Shinkle/POLITICO </figcredit>
  </figcaption>
  </figure>

  <figure>
  <img src="https://static.politico.com/dims4/default/00bb1f8/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fe6%2F99%2Fcd6aa5bc43dcb92588f25d90f16d%2Fgoldsmith-photogallery-13.jpg" />
  <figcaption class="figcaption">
  Caption text here.
  <figcredit> | John Shinkle/POLITICO </figcredit>
  </figcaption>
  </figure>
  <div class="clear"></div>
</div>
            `}
            expandable={false}
            expanded
          />
        </div>
      </section>
    </section>
  );
};

export default Photos;
