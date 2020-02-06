import React from 'react';
import styled from 'styled-components';

export default props => {
  return <Title>Hi {props.name}!</Title>;
};

const Title = styled.h1`
  color: blue;
`;
