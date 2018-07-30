import React from 'react';
import ColorTable from './../../colorTable/Table';
import Snippet from 'LIB/components/snippets/Snippet';

import { Colors } from 'lib';

const BrandColors = () => {
  return (
    <section>
      <a name='brand-colors' />

      <section>
        <h3>Brand Colors</h3>
        <p>These colors represent the core, pro and magazine colors.
        </p>
      </section>

      <section>
        <Snippet
          snippet={`const { brand } = Colors;`}
          langauge='javascript'
          expandable={false}
          expanded
        />
        <ColorTable colors={Colors.brand} />
      </section>
    </section>
  );
};

export default BrandColors;
