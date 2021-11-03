/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

export const openNoFrame = ({
  name,
  path,
  component: Component,
  exact,
  pageProps,
}) => (
  <Route
    path={path}
    exact={exact}
    render={() => React.createElement(Component, pageProps)}
    key={name}
  />
);
