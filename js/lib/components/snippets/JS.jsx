import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { light } from 'react-syntax-highlighter/styles/prism';
import copy from 'copy-to-clipboard';
import { css } from 'emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

class JsSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  render() {
    return (
      <div
        className={css`
          position:relative;
          max-width: 500px;
          margin: 20px auto;
          & > *:first-child {
            max-height: ${this.state.expanded ? '300px' : '50px'};
            transition: all .2s;
            border: 1px solid #eee;
          }
        `}
      >
        <SyntaxHighlighter
          language='javascript'
          style={light}
        >
          {this.props.snippet}
        </SyntaxHighlighter>
        <div
          className={css`
            position: absolute;
            top: 0px;
            right: 1px;
        `}
        >
          <Button
            onClick={() => {
              this.setState(prev => (
                {expanded: !prev.expanded}
              ));
            }}
          >
            <FontAwesomeIcon icon={this.state.expanded ? faMinus : faPlus} />
          </Button>
          <Button
            onClick={() => {
              copy(this.props.snippet);
            }}
          >
            <FontAwesomeIcon icon={faCopy} />
          </Button>
        </div>
      </div>
    );
  }
};

export default JsSnippet;
