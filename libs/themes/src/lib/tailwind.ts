import { base, roboto, bulma, tailwind } from '@theme-ui/presets';

export const _tailwind = {
  ...tailwind,
  fonts: {
    ...tailwind.fonts,
    body: 'Spectral, Lato',
  },
  forms: {
    ...tailwind.forms,
    input: {
      mb: 3,
    },
  },
  styles: {
    ...tailwind.styles,
    li: {
      display: 'flex',
    },
    '.someheader': {
      color: 'white',
    },
  },
  '.someheader': {
    color: 'white',
  },
};
