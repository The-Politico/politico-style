import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import { Sketch } from 'lib';
const { Typeahead } = Sketch;

const snippet = `const { Typeahead } = Sketch;


/* Component Logic (constructor) */
// ...
// Options must be an array of objects with an id and label
this.options = [
  {id: 'be1a08dd3e', label: 'Jon McClure'},
  {id: '3f4eae6e0d', label: 'Lily Mazet'},
  {id: '27c8790278', label: 'Andrew Briz'},
  {id: '17f55e396f', label: 'Tyler Fisher'},
  {id: 'e579add900', label: 'Sara Frostenson'},
];

// Selected options must be an array with an id and label too
this.state = {
  options1: this.options.slice(),
  value1: [],
  options2: this.options.slice(),
  value2: [{id: 'be1a08dd3e', label: 'Jon McClure'}],
};
// ...
/* End */

// Single Option Typeahead
<Typeahead
  id='example-typeahead-input'
  label='Sinlge Typeahead Selection'
  options={this.state.options1}
  selected={this.state.value1}
  placeholder='Choose an option'
  onChange={(selection) => {
    this.setState({
      value1: this.state.options1.filter(
        option => selection.map(
          selection => selection.id
        ).includes(option.id)
      ),
    });
  }}
/>

// Multiple Option Typeahead (With New Additions)
<Typeahead
  id='example-multiple-typeahead-input'
  label='Multiple Typeahead Selection'
  help='This is useful for things like tags.'
  options={this.state.options2}
  placeholder='Choose an option'
  selected={this.state.value2}
  multiple
  allowNew
  onChange={(selections) => {
    const newOptions = selections.filter(
      selection => selection.customOption
    ).map(({id, label}) => { return {id, label}; });

    this.setState({
      options2: this.state.options2.concat(newOptions),
      value2: this.state.options2.filter(
        option => selections.map(
          selection => selection.id
        ).includes(option.id)
      ).concat(newOptions),
    });
  }}
/>
`;

class TypeaheadExample extends React.Component {
  constructor(props) {
    super(props);

    this.options = [
      {id: 'be1a08dd3e', label: 'Jon McClure'},
      {id: '3f4eae6e0d', label: 'Lily Mazet'},
      {id: '27c8790278', label: 'Andrew Briz'},
      {id: '17f55e396f', label: 'Tyler Fisher'},
      {id: 'e579add900', label: 'Sara Frostenson'},
    ];

    this.state = {
      options1: this.options.slice(),
      value1: [],
      options2: this.options.slice(),
      value2: [{id: 'be1a08dd3e', label: 'Jon McClure'}],
    };
  }

  render() {
    return (
      <section>
        <h2>Typeahead</h2>

        <Typeahead
          id='example-typeahead-input'
          label='Sinlge Typeahead Selection'
          options={this.state.options1}
          selected={this.state.value1}
          placeholder='Choose an option'
          onChange={(selection) => {
            this.setState({
              value1: this.state.options1.filter(
                option => selection.map(
                  selection => selection.id
                ).includes(option.id)
              ),
            });
          }}
        />

        <Typeahead
          id='example-multiple-typeahead-input'
          label='Multiple Typeahead Selection'
          help='You can also turn on "allowNew" to allow users to input new options.'
          options={this.state.options2}
          placeholder='Choose an option'
          selected={this.state.value2}
          multiple
          allowNew
          onChange={(selections) => {
            const newOptions = selections.filter(
              selection => selection.customOption
            ).map(({id, label}) => { return {id, label}; });

            this.setState({
              options2: this.state.options2.concat(newOptions),
              value2: this.state.options2.filter(
                option => selections.map(
                  selection => selection.id
                ).includes(option.id)
              ).concat(newOptions),
            });
          }}
        />

        <small>{'You can find more Typeahead options in '}
          <a href='https://github.com/ericgio/react-bootstrap-typeahead#documentation'>{'the documention.'}</a>
        </small>
        <Snippet snippet={snippet} />
      </section>
    );
  }
};

export default TypeaheadExample;
