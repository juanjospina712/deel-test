/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import cloudOutlined from '@iconify/icons-ant-design/cloud-outlined';
import { pages } from '../activePages';
import {
  IconWrapper,
  NavLinkDisabled,
  NavLinkComp,
  StyledNav,
  NavItem,
  Logo,
} from './styles';

const link = ({
  name,
  path,
  Icon = cloudOutlined,
  height = '20px',
  exact,
  disabled,
}) => {
  if (disabled) {
    return (
      <NavLinkDisabled>
        <IconWrapper>
          <Icon {...{ height }} />
        </IconWrapper>
        <span>{name}</span>
      </NavLinkDisabled>
    );
  }
  return (
    <NavLinkComp to={path} exact={exact} activeClassName="active">
      <IconWrapper>
        <Icon {...{ height }} />
      </IconWrapper>
      <span>{name}</span>
    </NavLinkComp>
  );
};

const StarterLinks = [...Object.values(pages)].map(link);

const itemize = (child, i) => <NavItem key={i}>{child}</NavItem>;

const Nav = () => (
  <StyledNav>
    <div>
      <Logo />
      <ul>{StarterLinks.map(itemize)}</ul>
    </div>
  </StyledNav>
);

export default memo(Nav);
