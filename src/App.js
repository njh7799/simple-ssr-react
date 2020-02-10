import React from 'react';
import Home from './Home';

export default ({ data }) => {
  const { name } = data;
  return <Home name={name} />;
};
