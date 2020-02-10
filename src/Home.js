import React from 'react';
import styled from 'styled-components';

export default () => {
  function nameClickHandler() {
    alert('Hi');
  }
  return <Title onClick={nameClickHandler}>Hi !</Title>;
};

const Title = styled.h1`
  color: blue;
`;
