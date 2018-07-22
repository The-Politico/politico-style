import React from 'react';

import JsSnippet from 'LIB/snippets/JS';

import { Sketch } from 'lib';
const { InstructionsHeader } = Sketch;
const { InstructionsList } = Sketch;

const headerSnippet = `const { InstructionsHeader } = Sketch;

<InstructionsHeader appName='A New App' />
`;

const listSnippet = `const { InstructionsList } = Sketch;

<InstructionsList>
  <li>Instruction 1</li>
  <li>Instruction 2</li>
  <li>etc.</li>
</InstructionsList>
`;

const Instructions = () => (
  <div>
    <InstructionsHeader appName='A New App' />
    <JsSnippet snippet={headerSnippet} />
    <InstructionsList>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
      <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
      <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi.</li>
    </InstructionsList>
    <JsSnippet snippet={listSnippet} />
  </div>
);

export default Instructions;
