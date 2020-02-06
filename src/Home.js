import React from 'react';
import styled from 'styled-components';

export default ({ name }) => {
  function nameClickHandler() {
    alert(name);
  }
  return <Title onClick={nameClickHandler}>Hi {name}!</Title>;
};

const Title = styled.h1`
  color: blue;
`;
