import { defaultTheme } from './default';
import { base } from '@theme-ui/presets';
import merge from 'lodash.merge'


export const nord = merge(defaultTheme, {
  colors: {
    text: "#4c566a",
    primary: "#88C0D0",
    secondary: "#4C566A"
  },
  text: {
    heading: {
      color: 'primary'
    },
    heading2: {
      color: 'primary'
    },
    text: {

    }
  },
  styles: {
    hr: {
      height: 2
    }
  }

})
