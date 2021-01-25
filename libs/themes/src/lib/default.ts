import { base, roboto, bulma, tailwind } from '@theme-ui/presets';
import { merge } from 'remeda';

export const defaultTheme = merge(tailwind, {
  fonts: {
    body: 'Spectral, Lato',
  },
  forms: {
    input: {
      mb: 3,
    },
  },
  styles: {
    li: {
      display: 'flex',
    },
    '.someheader': {
      color: 'white',
    },
    hr: {
      height: 2,
    },
  },
  '.someheader': {
    color: 'white',
  },
});
