import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';
import Routes from './routes';

export default () => {
  return <Switch>{renderRoutes(Routes)}</Switch>;
};
