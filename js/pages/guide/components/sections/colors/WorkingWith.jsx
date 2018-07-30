import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const BrandColors = () => {
  return (
    <section>
      <a name='working-with-colors' />

      <section>
        <h3>Working with colors</h3>
        <Snippet
          snippet={`import { Colors } from 'politico-style';

const { brand } = Colors;

// Access colors by alias
brand.politicoRed // (SCSS variable, camelcased)
// { ... }

brand.politicoRed.hex
// #DC0228

brand.politicoRed.rgba()
// rgba(220, 2, 40, 255)

brand.politicoRed.rgba(100) // alpha...
// rgba(220, 2, 40, 100)

brand.politicoRed.rgbaArray(100)
// [220, 2, 40, 100]

const { dem } = Colors.elections;

dem.dem1.hex
// #D9C3A5

// Access via array instead of alias
dem.all[1].hex
// #D9C3A5`
          }
          expandable={false}
          expanded
        />
      </section>
    </section>
  );
};

export default BrandColors;
