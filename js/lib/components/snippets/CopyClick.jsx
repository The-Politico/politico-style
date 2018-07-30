import React from 'react';
import copy from 'copy-to-clipboard';
import { css } from 'emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CopyClick = (props) => (
  <a
    className={css`
      cursor: pointer;
      &:hover{
        text-decoration: underline !important;
        .fa-copy{
          opacity: 1;
        }
      }
      &:active .fa-copy{
        color: #81C784;
      }
    `}
    onClick={(e) => {
      e.preventDefault();
      copy(props.copy);
    }}
  >
    {props.children}
    <FontAwesomeIcon
      className={css`
        color: #ddd;
        margin-left: 5px;
        margin-right: 5px;
        opacity: 0;
        transition: color .2s ease-out;
      `}
      icon={faCopy}
    />
  </a>
);

export default CopyClick;
