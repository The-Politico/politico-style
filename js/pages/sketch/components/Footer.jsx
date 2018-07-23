import React from 'react';
import Snippet from 'LIB/snippets/Snippet';

import { Sketch } from 'lib';
const { Footer } = Sketch;

const snippet = `const { Footer } = Sketch;

<Footer />
`;

const FooterComponent = () => (
  <div>
    <Footer />
    <Snippet snippet={snippet} />
  </div>
);

export default FooterComponent;
