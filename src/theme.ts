import preset, { Theme } from '@rebass/preset';
import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}

const BASE_THEME = preset as Theme;

const theme: Theme = {
  ...BASE_THEME,
  colors: {
    background: '#FFFFFF',
    muted: '#FFFFFF',
    gray: '#DDDFDF',
    text: '#343434',

    primary: '#1B98E0',
    secondary: '#FFFFFF',
    highlight: '#1B98E0',
  },
  queries: {
    xs: '@media screen and (max-width: 40em)',
    sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
    md: '@media screen and (min-width: 52em) and (max-width: 64em)',
    lg: '@media screen and (min-width: 64em)',
  },
  buttons: {
    empty: {
      p: 0,
      border: 0,
      m: 0,
      background: 'transparent',
    },
  },
  fonts: {
    body: 'roboto',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

export default theme;
