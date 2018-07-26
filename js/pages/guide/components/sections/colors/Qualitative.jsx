import React from 'react';
import ColorTable from './../../colorTable/Table';
import Snippet from 'LIB/components/snippets/Snippet';

import { Colors } from 'lib';

const QualitativeColors = () => {
  return (
    <section>
      <a name='qualitative-colors' />

      <section>
        <h3>Qualitative</h3>
        <p>Qualitative scheme do not imply magnitude differences between legend classes, and hues are used to create the primary visual differences between classes. Qualitative schemes are best suited to representing nominal or categorical data.</p>

        <p>Most of the qualitative schemes rely on differences in hue with only subtle lightness differences between colors. You may pick a subset of colors from a legend with more classes if you are not pleased with the subsets. For example, you could pick four colors from a seven-color legend. - <a target='blank' href='http://colorbrewer2.org/learnmore/schemes_full.html#qualitative'>ColorBrewer</a></p>
      </section>

      <section>
        <h4 className='mb1'>Seven-color palette</h4>
        <Snippet
          snippet={`const { seven } = Colors.qualitative;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.qualitative.seven} />
      </section>

      <section>
        <h4 className='mb1'>Four-color palette</h4>
        <Snippet
          snippet={`const { four } = Colors.qualitative;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.qualitative.four} />
      </section>

      <section>
        <h4 className='mb1'>Pairs</h4>
        <Snippet
          snippet={`const { pairs } = Colors.qualitative;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.qualitative.pairs} />
      </section>

      <section>
        <h4 className='mb1'>Maps</h4>
        <Snippet
          snippet={`const { maps } = Colors.qualitative;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.qualitative.maps} />
      </section>
    </section>
  );
};

export default QualitativeColors;
