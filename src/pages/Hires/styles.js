import styled from 'styled-components';
import { backgroundLight, action, actionHover } from '../../theme';

export const HireContainer = styled.div.attrs({
  className: 'flex flex-col w-full h-screen px-20 py-20',
})`
  background-color: ${backgroundLight};
  & {
    .match {
      background-color: ${backgroundLight};
      font-weight: 600;
    }
    h1 {
      font-size: 2rem;
      font-weight: 400;
    }
    h2 {
      font-size: 1.3rem;
      font-weight: 600;
      padding-bottom: 1rem;
    }
    h3 {
      font-weight: 500;
      padding-bottom: 1rem;
    }
  }
`;

export const MainButton = styled.button.attrs({
  className: 'w-full',
})`
  background-color: ${action};
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 0.5rem 0.5rem;
  & {
    :focus {
      outline: none;
    }
    :hover {
      background-color: ${actionHover};
    }
  }
`;

export const HireContent = styled.div.attrs({
  className: 'flex w-full h-full',
})``;

export const Column = styled.div.attrs({
  className: 'flex flex-col w-full',
})``;

export const CardHolder = styled.div.attrs({
  className: ' mt-8 w-2/3',
})``;
