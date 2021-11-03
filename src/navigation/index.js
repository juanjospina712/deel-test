/* eslint-disable react/prop-types */
import React from 'react';

import { openNoFrame } from './setRoutes';
import { pages } from './activePages';

export const PageRouter = ({ pageProps }) => {
  const orderedRoutes = [
    ...Object.values(pages).map(({ isProtected, mainFrame, ...page }) =>
      openNoFrame({
        ...page,
        pageProps,
      }),
    ),
  ];
  return <>{orderedRoutes}</>;
};
