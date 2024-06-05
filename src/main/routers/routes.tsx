import * as PAGES from 'presentation/pages';

const p = (path: string) => `${path}`;

export const ROUTES = Object.freeze({
  HOME: {
    path: () => p('/'),
    page: () => <PAGES.Home />,
  },
  Relatos: {
    path: () => '/relatos',
    page: () => <PAGES.Relatos />,
  },
});
