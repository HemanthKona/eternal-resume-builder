import {
  base,
  roboto,
  bulma,
  tailwind
} from '@theme-ui/presets';

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: '#333',
  },
  fonts: {
    ...tailwind.fonts,
    body: "Spectral, Lato"
  },
  forms: {
    ...tailwind.forms,
    input: {
      mb: 3
    }
  },
  styles: {
    ...tailwind.styles,
    li: {
      display: 'flex'
    },
    ".someheader": {
      color: 'white'
    }
  },
  ".someheader": {
    color: 'white'
  }
}

// may be use these
export {
  base,
  roboto,
  bulma
}


/**
 Text: 900 // use darker color to elevate
 background: 100,
 primary: 300
 secondary: 500
 dark: {
   text: 50, use lighter color to eleveate text
   background: 900
   primary: 600
   secondary: 500
 },
 cyan: {
   primary: #1eadc1
 },
 green: {
   primary: #0a8e83
 }
 */
/**
 colors_red_shade: {
  background | primary_light: '#C26D6D',
  primary_darkk: '#A55555',
  text: '#F6D1E5',
  text:
 }
 *
 *
 */
