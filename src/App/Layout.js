import React from 'react';
import { Switch } from 'react-router-dom';
import { PageRouter as Pages } from '../navigation';

const Layout = () => (
  <Switch>
    <Pages />
  </Switch>
);

export default Layout;
