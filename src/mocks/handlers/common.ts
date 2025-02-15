import { http } from 'msw';

export const CommonHandlers = [
  http.get('*chrome-extension*', () => {
    return;
  }),
  http.get('/*', () => {
    return;
  }),
];
