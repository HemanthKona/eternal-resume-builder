import { theme } from './default';

export const nord = {
  ...theme,
  colors: {
    ...theme.colors,
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

}
