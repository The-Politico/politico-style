import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';

const QuickStart = () => (
  <section className='border-bottom'>
    <a name='themes' />
    <section className='content-fit'>
      <h3>Quickstart</h3>
      <br />
      <h4>Install</h4>
      <Snippet
        snippet='yarn add politico-style'
        langauge='bash'
        expandable={false}
      />
      <br />
      <h4>Working with Styles</h4>
      <p className='sans'>
        Include the theme you want in your SCSS ...
      </p>
      <Snippet
        snippet={`@import '~politico-style/scss/base/theme';`}
        langauge='scss'
        expandable={false}
      />

      <p className='sans'>
        ... or in your JavaScript.
      </p>
      <Snippet
        snippet={`import 'politico-style/scss/base/theme';`}
        expandable={false}
      />

      <br />
      <h4>Working with Components</h4>
      <p className='sans'>
        Import a component theme in your script ...
      </p>
      <Snippet
        snippet={`import { Sketch } from 'politico-style';`}
        expandable={false}
      />

      <p className='sans'>
        ... access the component you want from the theme ...
      </p>
      <Snippet
        snippet={`const { Nav } = Sketch;`}
        expandable={false}
      />

      <p className='sans'>
        ... and customize the component with props to use.
      </p>
      <Snippet
        snippet={`<Nav appName='New app'/>`}
        expandable={false}
      />
    </section>
  </section>
);

export default QuickStart;
