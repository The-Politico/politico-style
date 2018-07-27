import React from 'react';

const Accessiblity = () => (
  <section className='border-bottom'>
    <a name='accessibility' />
    <section>
      <h3>Design for inclusion</h3>
      <p className='sans'>
        According to the U.S. census, nearly one in five Americans have a disability. As a team, we're focused on making sure all of our readers have access to clear, accurate news. Following these <a target='blank' href='https://www.w3.org/WAI/gettingstarted/tips/designing.html'>WAI</a> tips ensure our work is accessible.
      </p>

      <ul className='content-fit'>
        <li>
          Sufficient contrast between foreground and background. This will also help for mobile users reading in direct sunlight [<a target='blank' href='https://www.census.gov/newsroom/releases/archives/miscellaneous/cb12-134.html'> Check your color contrast here</a> ]
        </li>
        <li>
          Is your palette color-blind safe? [ <a target='blank' href='http://colororacle.org/'> Install this tool to check your color palette</a> ]
        </li>
        <li>
          Don't use color alone to convey information, read [ <a target='blank' href='https://www.w3.org/WAI/gettingstarted/tips/designing.html#dont-use-color-alone-to-convey-information'>here</a> ] and [<a target='blank' href='http://colororacle.org/resources/2007_JennyKelso_ColorDesign_hires.pdf'> here </a> ]<br />
          <p className='mt4 small sans'>
            This <a target='blank' href='http://colororacle.org/resources/2007_JennyKelso_ColorDesign_hires.pdf'>example</a> from Bernhard Jenny and Nathaniel Vaughn Kelso shows the red-green confusion caused by common color-blindness. Here, shapes and pattern fill help distinguish the dots and lines.
          </p>
          <figure className='ml4'>
            <h5>Lines</h5>
            <img src='../images/lines.png' alt='This chart shows how best to design for colorblind readers. Labels, pattern fill and color combine to make a clear reading experience.' />
          </figure>
          <figure className='ml4 mb4'>
            <h5>Shapes</h5>
            <img src='../images/shapes.png' alt='This chart shows how best to design for colorblind readers. Labels, pattern fill and shape combine to make a clear reading experience.' />
          </figure>
        </li>

        <li>Make sure headings, labels and paragraphs are associated by proximity. White space is your friend [ <a target='blank' href='https://www.w3.org/WAI/gettingstarted/tips/designing.html#use-headings-and-spacing-to-group-related-content'>Read more</a> ]</li>
        <li>Provide easily identifiable feedback. Ie: In a form, can a reader tab to each item and actively see where the cursor is? [ <a target='blank' href='https://www.w3.org/WAI/gettingstarted/tips/designing.html#provide-easily-identifiable-feedback'>Read more</a> ]</li>
        <li>Use <code>alt</code> tags for images. For video, a transcript is ideal [ <a target='blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Accessibility_concerns'>Read more</a> ]</li>
        <li>Provide controls for content that starts automatically</li>
      </ul>
    </section>
  </section>
);

export default Accessiblity;
