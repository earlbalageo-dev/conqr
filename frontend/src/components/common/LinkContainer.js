import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//Use this to have a React Router Link without styles
const Container = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const LinkContainer = (props) => {
  return <Container {...props} />;
};

export default LinkContainer;
//export default  (props) => <LinkContainer {...props} />;
