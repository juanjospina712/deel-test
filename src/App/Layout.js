import React from 'react';
import { Switch } from 'react-router-dom';
import { PageRouter as Pages } from '../navigation';
import Main from './Main';
import Nav from '../navigation/SideNavigation';

const Layout = () => (
  <>
    <Nav />
    <Main>
      <Switch>
        <Pages />
      </Switch>
    </Main>
  </>
);

export default Layout;
