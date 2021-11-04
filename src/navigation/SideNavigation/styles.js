import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { navWidth } from '../../constants';
import { highlighted, foreground } from '../../theme';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';

export const IconWrapper = styled.span`
  display: inline-block;
  width: 20px;
  margin-right: 10px;
  color: #222;
  .active & {
    color: #222;
  }
  [disabled] & {
    color: #666;
  }
`;

export const Logo = styled(LogoIcon)`
  width: 30%;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const NavLinkComp = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  display: flex;
  color: ${foreground};
  transition: color 0.1s ease-in;
  & > * {
    vertical-align: middle;
  }
  & {
    svg {
      fill: #a1a1a5;
      height: 1.5rem;
      width: 100%;
    }
  }
  &.active {
    color: #ff5745;
    background: rgba(230, 236, 243, 0.64);
    border-radius: 8px;
    width: 90%;
  }
  &[disabled] {
    font-weight: normal;
    color: #b1b1b5;
    pointer-events: none;
  }
  &:hover {
    color: #ff7765;
  }
`;

export const NavLinkDisabled = styled.div`
  font-weight: normal;
  color: #b1b1b5;
  pointer-events: none;
`;

export const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #ffffff;
  height: 100%;
  width: ${navWidth};
  padding-left: 20px;
`;

export const H2 = styled.h2`
  color: #a1a1a5;
  font-size: 14px;
  margin-top: 2.8rem;
  margin-bottom: 20px;
`;

export const NavItem = styled.li`
  display: block;
  margin-top: 0.5rem;
  &:hover {
    background: rgba(230, 236, 243, 0.64);
    border-radius: 8px;
    width: 90%;
  }
  & span {
    font-weight: 400;
  }
`;

export const TenantContainer = styled.div.attrs({
  className: 'h-8 w-8',
})`
  background: ${({ background }) => background || highlighted};
  border-radius: 8px;
  color: #fff;
  padding: 2px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  & img {
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background: #f9fbfe;
  }
`;

export const FixedContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 1rem;
  width: 13.8rem;
`;

export const AccountContainer = styled.div.attrs({
  className: 'flex focus:outline-none w-full',
})`
  flex-direction: row;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  font-size: 0.9rem;
  &:hover {
    background: rgba(230, 236, 243, 0.64);
    border-radius: 8px;
  }
  &:focus {
    outline: none;
  }
  &.active {
    background: rgba(230, 236, 243, 0.64);
    border-radius: 8px;
  }
`;

export const UserInfoHolder = styled.div.attrs({
  className: 'flex justify-between w-full',
})`
  align-self: center;
  color: #111827;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  & div {
    align-self: center;
  }
  & svg {
    fill: #a1a1a5;
    align-self: center;
  }
`;

export const ImageHolder = styled.div.attrs({
  className: `flex justify-center items-center rounded-full p2 mr-3`,
})`
  border: ${({ border }) => border || `1px solid ${foreground}`};
  & svg {
    padding: 5px;
    width: 2.5rem;
    height: 2.5rem;
  }
  & img {
    max-width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const CardHolder = styled.div`
  position: absolute;
  top: 7.7rem;
  width: 13.8rem;
  & button {
    display: flex;
    flex-direction: row;
    text-align: left;
    width: 100%;
    padding: 10px 0px;
    & svg {
      align-self: center;
      margin-right: 0.5rem;
      height: 1.1rem;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      background: #f3f4f6;
    }
  }
`;
