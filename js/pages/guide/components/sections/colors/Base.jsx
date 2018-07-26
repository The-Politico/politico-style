import React from 'react';
import ColorTable from './../../colorTable/Table';
import Snippet from 'LIB/components/snippets/Snippet';

import { Colors } from 'lib';

const BaseColors = () => {
  return (
    <section>
      <a name='base-colors' />

      <section>
        <h3>Base colors</h3>
        <p>These are based on the brand colors, cannibalizing them in some cases. In others, drawing from them.
        </p>
      </section>

      <section>
        <Snippet
          snippet={`const { base } = Colors;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.base} />
      </section>
    </section>
  );
};

export default BaseColors;
