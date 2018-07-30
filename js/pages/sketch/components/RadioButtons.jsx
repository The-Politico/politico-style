import React from 'react';
import { Sketch } from 'lib';

import Snippet from 'LIB/components/snippets/Snippet';
const { RadioGroup } = Sketch;

const RadioButton = RadioGroup('buttons');

const snippet = `const { RadioGroup } = Sketch;

// RadioGroup returns a radio button component
const RadioButton = RadioGroup('my-radio-group');

// Option 1
<RadioButton
  id='opt1'
  checked={this.state.selected === 'opt1'}
  onChange={() => this.setState({ selected: 'opt1' })}
>Option 1</RadioButton>

// Option 2
<RadioButton
  id='opt2'
  checked={this.state.selected === 'opt2'}
  onChange={() => this.setState({ selected: 'opt2' })}
>Option 2</RadioButton>
`;

class RadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'opt1',
    };
  }
  render() {
    return (
      <section>
        <h2>Radio Buttons</h2>
        <RadioButton
          id='opt1'
          checked={this.state.selected === 'opt1'}
          onChange={() => this.setState({ selected: 'opt1' })}
        >Option 1</RadioButton>
        <RadioButton
          id='opt2'
          checked={this.state.selected === 'opt2'}
          onChange={() => this.setState({ selected: 'opt2' })}
        >Option 2</RadioButton>

        <Snippet snippet={snippet} />
      </section>
    );
  }
};

export default RadioButtons;
