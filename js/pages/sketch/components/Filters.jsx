import React from 'react';
import Snippet from 'LIB/components/snippets/Snippet';
import { Sketch } from 'lib';
const { PillFilter } = Sketch;

const snippet = `const { PillFilter } = Sketch;

<PillFilter
  active={this.state.filter}
  onClick={() =>
    this.setState((prev) => ({filter: !prev.filter}))
  }
>A Filter</PillFilter>
`;

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter1: true,
      filter2: false,
      filter3: false,
    };
  }

  render() {
    return (
      <section className="border-top">
        <h2 className='section-header'>Pill Filters</h2>
        <PillFilter
          active={this.state.filter1}
          onClick={() => this.setState((prev) => ({filter1: !prev.filter1}))}
        >Filter 1</PillFilter>
        <PillFilter
          active={this.state.filter2}
          onClick={() => this.setState((prev) => ({filter2: !prev.filter2}))}
        >Filter 2</PillFilter>
        <PillFilter
          active={this.state.filter3}
          onClick={() => this.setState((prev) => ({filter3: !prev.filter3}))}
        >Filter 3</PillFilter>

        <Snippet snippet={snippet} />
      </section>
    );
  }
}

export default Filters;
