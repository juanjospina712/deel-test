import styled from 'styled-components';

import { navWidth } from '../constants';

const Main = styled.main`
  margin-left: ${navWidth};
  width: calc(100vw - ${navWidth});
  box-shadow: -1px 0 #e3e8ee;
  height: 100%;
  position: relative;
`;

export default Main;
