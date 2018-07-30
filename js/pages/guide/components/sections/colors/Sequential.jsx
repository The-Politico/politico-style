import React from 'react';
import ColorTable from './../../colorTable/Table';
import Snippet from 'LIB/components/snippets/Snippet';

import { Colors } from 'lib';

const SequentialColors = () => {
  return (
    <section>
      <a name='sequential-colors' />

      <section>
        <h3>Sequential</h3>
        <p>"Sequential data classes are logically arranged from high to low, and this stepped sequence of categories should be represented by sequential lightness steps. Terrain slope categories or population densities, for example, are well represented by sequental color schemes." - <a target='blank' href='https://web.natur.cuni.cz/~langhamr/lectures/vtfg1/mapinfo_2/barvy/colors.html'>ColorBrewer</a>
        </p>
      </section>

      <section>
        <h4 className='mb1'>Money-Foam</h4>
        <Snippet
          snippet={`const { moneyFoam } = Colors.sequential;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.sequential.moneyFoam} />
      </section>

      <section>
        <h4 className='mb1'>Sangria-Peach</h4>
        <Snippet
          snippet={`const { sangriaPeach } = Colors.sequential;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.sequential.sangriaPeach} />
      </section>

      <section>
        <h4 className='mb1'>Red-Yellow</h4>
        <Snippet
          snippet={`const { redYellow } = Colors.sequential;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.sequential.redYellow} />
      </section>
    </section>
  );
};

export default SequentialColors;
