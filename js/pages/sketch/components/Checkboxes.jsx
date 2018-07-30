import React from 'react';
import { Sketch } from 'lib';

import Snippet from 'LIB/components/snippets/Snippet';
const { Checkbox } = Sketch;

const snippet = `const { Checkbox } = Sketch;

<Checkbox
  name='option'
  checked={this.state.option} // T/F
  onChange={() => this.setState(prev => ({ option: !prev.option }))}
>Option</Checkbox>
`;

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opt1: true,
      opt2: false,
    };
  }
  render() {
    return (
      <section>
        <h2>Checkboxes</h2>
        <Checkbox
          name='opt1'
          checked={this.state.opt1}
          onChange={() => this.setState(prev => ({ opt1: !prev.opt1 }))}
        >Option 1</Checkbox>
        <Checkbox
          name='opt2'
          checked={this.state.opt2}
          onChange={() => this.setState(prev => ({ opt2: !prev.opt2 }))}
        >Option 2</Checkbox>

        <Snippet snippet={snippet} />
      </section>
    );
  }
};

export default Checkboxes;
