import React from 'react';

import Snippet from 'LIB/components/snippets/Snippet';

import { Sketch } from 'lib';
const { Header } = Sketch;

const snippet = `const { Header } = Sketch;

<Header
  title='A New App'
  subhed='Welcome to'
/>
`;

const HeaderComponent = () => (
  <section>
    <Header title='A New App' />
    <Snippet snippet={snippet} />
  </section>
);

export default HeaderComponent;
