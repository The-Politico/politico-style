import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import { Sketch } from 'lib';
const { Button } = Sketch;

const snippet = `const { Button } = Sketch;

<Button
  onClick={() => console.log('FIRE!')}
>Click me!</Button>

// BUTTON STYLES
// Primary
<Button>Primary</Button>
<Button outline>Primary</Button>
//Secondary
<Button type='secondary'>Secondary</Button>
<Button type='secondary' outline>Secondary</Button>
// Dark
<Button type='dark'>Dark</Button>
<Button type='dark' outline>Dark</Button>
`;

const Buttons = () => (
  <section className="border-top">
    <h2 className='section-header'>Buttons</h2>
    <Button>Primary</Button>
    <Button type='secondary'>Secondary</Button>
    <Button type='dark'>Dark</Button>
    <Button outline>Primary</Button>
    <Button type='secondary' outline>Secondary</Button>
    <Button type='dark' outline>Dark</Button>

    <Snippet snippet={snippet} />
  </section>
);

export default Buttons;
