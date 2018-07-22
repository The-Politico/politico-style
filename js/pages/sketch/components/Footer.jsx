import React from 'react';
import JsSnippet from 'LIB/snippets/JS';

import { Sketch } from 'lib';
const { Footer } = Sketch;

const snippet = `const { Footer } = Sketch;

<Footer />
`;

const FooterComponent = () => (
  <div>
    <Footer />
    <JsSnippet snippet={snippet} />
  </div>
);

export default FooterComponent;
