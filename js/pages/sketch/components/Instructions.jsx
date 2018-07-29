import React from 'react';

import Snippet from 'LIB/components/snippets/Snippet';

import { Sketch } from 'lib';
const { InstructionsList } = Sketch;

const snippet = `const { InstructionsList } = Sketch;

<InstructionsList>
  <li>Instruction 1</li>
  <li>Instruction 2</li>
  <li>etc.</li>
</InstructionsList>
`;

const Instructions = () => (
  <section>
    <h2>Instructions</h2>
    <InstructionsList>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
      <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
      <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi.</li>
    </InstructionsList>
    <Snippet snippet={snippet} />
  </section>
);

export default Instructions;
