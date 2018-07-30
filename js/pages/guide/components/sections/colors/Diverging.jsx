import React from 'react';
import ColorTable from './../../colorTable/Table';
import Snippet from 'LIB/components/snippets/Snippet';

import { Colors } from 'lib';

const DivergingColors = () => {
  return (
    <section>
      <a name='diverging-colors' />

      <section>
        <h3>Diverging</h3>
        <p>Diverging schemes allow the emphasis of a quantitative data display to be progressions outward from a critical midpoint of the data range. Deviations above and below the median death rate from a disease, for example, are well represented by a diverging color scheme. - <a target='blank' href='http://www.personal.psu.edu/cab38/ColorSch/SchHTMLs/CBColorDiv.html'>ColorBrewer</a>
        </p>
      </section>

      <section>
        <h4 className='mb1'>Moss-Sapphire</h4>
        <Snippet
          snippet={`const { mossSapphire } = Colors.diverging;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.diverging.mossSapphire} />
      </section>

      <section>
        <h4 className='mb1'>Teal-Dirt</h4>
        <Snippet
          snippet={`const { tealDirt } = Colors.diverging;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.diverging.tealDirt} />
      </section>
    </section>
  );
};

export default DivergingColors;
