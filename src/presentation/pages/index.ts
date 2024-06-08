import React from 'react';

export const Home = React.lazy(() => import('./Home'));
export const Relatos = React.lazy(() => import('./Relatos'));
export const TextDetails = React.lazy(
  () => import('./Relatos/components/TextDetails')
);
