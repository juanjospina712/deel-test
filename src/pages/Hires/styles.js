import styled from 'styled-components';
import { backgroundLight } from '../../theme';

export const Blocked = styled.div.attrs({
  className: 'flex flex-col w-full h-screen justify-center',
})`
  background-color: ${backgroundLight};
  & {
    img {
      width: 40rem;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const ActionHolder = styled.div.attrs({
  className: 'w-64 mt-5 self-center',
})``;
