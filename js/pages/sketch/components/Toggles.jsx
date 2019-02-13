import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import { Sketch } from 'lib';
const { Toggle } = Sketch;

const snippet = `const { Toggle } = Sketch;

<Toggle
  active={this.state.value}
  onClick={value => {
    this.setState({ value });
  }}
/>
`;

class Toggles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  render() {
    return (
      <section>
        <h2>Toggles</h2>
        <Toggle
          active={this.state.value}
          onClick={value => {
            this.setState({ value });
          }}
        />

        <Snippet snippet={snippet} />
      </section>
    );
  }
}

export default Toggles;
