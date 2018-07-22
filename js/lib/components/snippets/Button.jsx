import React from 'react';
import styled from 'react-emotion';

const Button = styled('button')`
  margin: 1px 1px 0 1px;
  border-radius:4px;
  border: 1px solid #ddd;
  background-color:rgba(255,255,255,1);
  color: rgba(0,0,0,0.2);
  &:hover{
    background-color:rgba(255,255,255,1);
    color: rgba(0,0,0,0.3);
  }
  &:active{
    color: #81C784;
  }
  outline: none !important;
`;

export default Button;
