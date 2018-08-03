import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import { Sketch } from 'lib';
const { Select } = Sketch;

const snippet = `const { Select } = Sketch;


/* Component Logic (constructor) */
// ...
// Options must be an array of objects with an id and label
this.options = [
  {id: 'be1a08dd3e', label: 'Option 1'},
  {id: '3f4eae6e0d', label: 'Option 2'},
  {id: '27c8790278', label: 'Option 3'},
  {id: '17f55e396f', label: 'Option 4'},
  {id: 'e579add900', label: 'Option 5'},
  {id: '358e2690ad', label: 'Option 6'},
  {id: '5beb393858', label: 'Option 7'},
];
// ...
/* End */

// Single Option Dropdown
<Select
  id='example-select-input'
  label='Option Selection'
  help='Selects can have help text too!'
  options={this.options}
  value={this.state.value}
  placeholder='Choose an option'
  onChange={(e) => this.setState({ value: e.target.value })}
/>

// Multiple Option Select
<Select
  id='example-multiple-select-input'
  label='Multiple Option Selection'
  multiple
  size={this.options.length}
  help='This may need some styling.'
  options={this.options}
  value={this.state.value}
  placeholder='Choose an option'
  onChange={(e) => {
    const value = e.target.value;
    return this.setState((prev) => {
      if (prev.value.includes(value)) {
        return { value: prev.value.filter(key => key !== value) };
      } else {
        return { value: prev.value.concat([value]) };
      }
    });
  }}
/>
`;

class SelectExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: [],
    };

    this.options = [
      {id: 'be1a08dd3e', label: 'Option 1'},
      {id: '3f4eae6e0d', label: 'Option 2'},
      {id: '27c8790278', label: 'Option 3'},
      {id: '17f55e396f', label: 'Option 4'},
      {id: 'e579add900', label: 'Option 5'},
      {id: '358e2690ad', label: 'Option 6'},
      {id: '5beb393858', label: 'Option 7'},
    ];
  }
  render() {
    return (
      <section>
        <h2>Select Inputs</h2>

        <Select
          id='example-select-input'
          label='Option Selection'
          help='Selects can have help text too!'
          options={this.options}
          value={this.state.value1}
          placeholder='Choose an option'
          onChange={(e) => { this.setState({ value1: e.target.value }); }}
        />

        <Select
          id='example-multiple-select-input'
          label='Multiple Option Selection'
          multiple
          size={this.options.length}
          help='This may need some styling.'
          options={this.options}
          value={this.state.value2}
          placeholder='Choose an option'
          onChange={(e) => {
            const value = e.target.value;
            return this.setState((prev) => {
              if (prev.value2.includes(value)) {
                return { value2: prev.value2.filter(key => key !== value) };
              } else {
                return { value2: prev.value2.concat([value]) };
              }
            });
          }}
        />

        <Snippet snippet={snippet} />
      </section>
    );
  }
};

export default SelectExample;
