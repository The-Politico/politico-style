import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import { Sketch } from 'lib';
const { TextInput } = Sketch;

const snippet = `const { TextInput } = Sketch;

// Basic Text Input
<TextInput
  id='example-text-input'
  value={this.state.value}
  onChange={(e) => this.setState({ value: e.target.value })}
/>

// Text Input With label, help, and other input props
<TextInput
  id='example-number-input'
  className='custom-input-class'
  label='Number Input'
  wrapperClassName='custom-wrapper-class'
  placeholder='Number input with label and help text.'
  help='Choose a multiple of 10 from 0 to 100.'
  type='number'
  step={10}
  min='0'
  max='100'
  value={this.state.value}
  onChange={(e) => this.setState({ value: e.target.value })}
/>

// Text Area
<TextInput
  id='example-textarea-input'
  label='Text Area'
  placeholder='Text Areas are also included in this component.'
  type='textarea'
  value={this.state.value}
  onChange={(e) => this.setState({ value: e.target.value })}
/>
`;

class TextInputExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
    };
  }
  render() {
    return (
      <section>
        <h2>Text Inputs</h2>

        <TextInput
          id='example-text-input'
          placeholder='Basic text input.'
          value={this.state.value1}
          onChange={(e) => this.setState({ value1: e.target.value })}
        />

        <TextInput
          id='example-number-input'
          wrapperClassName='custom-wrapper-class'
          className='custom-input-class'
          label='Number Input'
          placeholder='Number input with label and help text.'
          help='Choose a multiple of 10 from 0 to 100.'
          type='number'
          step={10}
          min='0'
          max='100'
          value={this.state.value2}
          onChange={(e) => this.setState({ value2: e.target.value })}
        />

        <TextInput
          id='example-textarea-input'
          label='Text Area'
          placeholder='Text Areas are also included in this component.'
          type='textarea'
          value={this.state.value3}
          onChange={(e) => this.setState({ value3: e.target.value })}
        />

        <Snippet snippet={snippet} />
      </section>
    );
  }
};

export default TextInputExample;
