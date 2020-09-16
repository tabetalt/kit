import { Theme } from 'theme-ui';
import badges from './badges';
import buttons from './buttons';
import styles from './styles';
import forms from './forms';
import colors from './colors';
import links from './links';

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '0.71rem', // 0
    '1rem', // 1
    '1.5rem', // 2
    '2rem', // 3
    '3rem', // 4
    '4rem', // 5
    '4.5rem', // 6
    '5rem', // 7
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  links,
  colors,
  badges,
  buttons,
  forms,
  styles,
} as Theme;

export default theme;
