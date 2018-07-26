import React from 'react';
import ColorTable from './../../colorTable/Table';
import Snippet from 'LIB/components/snippets/Snippet';

import { Colors } from 'lib';

const ElectionColors = () => {
  return (
    <section>
      <a name='election-colors' />

      <section>
        <h3>Elections</h3>
        <p>Our POLITICO color scheme for covering elections or other political paarty-oriented stories.</p>
      </section>

      <section>
        <h4 className='mb1'>Party colors</h4>
        <Snippet
          snippet={`const { party } = Colors.elections;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.elections.party} />
      </section>

      <section>
        <h4 className='mb1'>Dem-GOP ramp</h4>
        <Snippet
          snippet={`const { demgop } = Colors.elections;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.elections.demgop} />
      </section>

      <section>
        <h4 className='mb1'>10-level Dem colors</h4>
        <Snippet
          snippet={`const { dem } = Colors.elections;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.elections.dem} />
      </section>

      <section>
        <h4 className='mb1'>10-level GOP colors</h4>
        <Snippet
          snippet={`const { gop } = Colors.elections;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.elections.gop} />
      </section>
    </section>
  );
};

export default ElectionColors;
