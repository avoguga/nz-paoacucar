import * as PAGES from 'presentation/pages';

const p = (path: string) => `${path}`;

export const ROUTES = Object.freeze({
  HOME: {
    path: () => p('/'),
    page: () => <PAGES.Home />,
  },
  Relatos: {
    path: () => p('/relatos'),
    page: () => <PAGES.Relatos />,
  },
  text_detail: {
    path: () => p('/relato/text/:id'), // Parâmetro dinâmico `id`
    page: () => <PAGES.TextDetails />,
  },
  video_detail: {
    path: () => p('/relato/video/:id'), // Parâmetro dinâmico `id`
    page: () => <PAGES.VideoDetails />,
  },
});
