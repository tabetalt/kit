/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Theme } from 'theme-ui';

const grayscale = ['#9AA0B5', '#E4E6EC', '#EEEFF3', '#F6F6F9'];
const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  buttons: {
    primary: {
      py: 2,
      px: 3,
      fontFamily: 'body',
      borderRadius: '38px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      '&:active': {
        bg: '#E39256',
      },
      '&:disabled,&[disabled]': {
        cursor: 'default',
        bg: 'highlight',
        color: 'muted',
      },
    },
    outline: {
      py: '8px',
      px: 3,
      fontFamily: 'body',
      borderRadius: '38px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s, box-shadow 0.3s',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 3px var(--theme-ui-colors-secondary, #1B202E)',
      // border: '3px solid',
      // borderColor: 'secondary',
      color: 'text',
      '&:active': {
        bg: 'gray_2',
      },
      '&:hover': {
        boxShadow: 'inset 0 0 0 3px var(--theme-ui-colors-secondary, #FFA665)',
      },
      '&:disabled,&[disabled]': {
        cursor: 'default',
        bg: 'highlight',
        boxShadow: 'inset 0 0 0 3px var(--theme-ui-colors-muted, #9AA0B5)',
        color: 'muted',
      },
    },
    warning: {
      py: '8px',
      px: 3,
      fontFamily: 'body',
      borderRadius: '38px',
      outline: 'none',
      cursor: 'pointer',
      bg: 'transparent',
      transition: 'background-color 0.3s, box-shadow 0.3s',
      boxShadow: 'inset 0 0 0 3px var(--theme-ui-colors-errors, #E03B54)',
      // border: '3px solid',
      // borderColor: 'secondary',
      color: 'error',
      '&:active': {
        bg: 'gray_2',
      },
      '&:disabled,&[disabled]': {
        cursor: 'default',
        bg: 'highlight',
        boxShadow: 'inset 0 0 0 3px var(--theme-ui-colors-error, #E03B54)',
        color: 'muted',
      },
    },
    destructive: {
      py: '8px',
      px: 3,
      fontFamily: 'body',
      borderRadius: '38px',
      outline: 'none',
      cursor: 'pointer',
      bg: 'error',
      color: 'background',
      transition: 'background-color 0.3s',
      '&:active': {
        bg: '#CB374D',
      },
      '&:disabled,&[disabled]': {
        cursor: 'default',
        bg: 'highlight',
        color: 'muted',
      },
    },
  },
  colors: {
    text: '#1B202E',
    background: '#F6F6F9',
    primary: '#FFA665',
    secondary: '#1B202E',
    accent: '#2B40B5',
    highlight: '#E4E6EC',
    muted: '#9AA0B5',
    ...grayscale.reduce((colors: any, curColor, i) => {
      colors[`gray_${i}`] = curColor;
      return colors;
    }, {}),
    error: '#E03B54',
    success: '#00CD98',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  forms: {
    checkbox: {
      'input:checked ~ &': { color: 'secondary' },
      'input:disabled ~ &': {
        color: 'gray_1',
        bg: 'gray_2',
      },
    },
    input: {
      fontFamily: 'body',
      borderRadius: '38px',
      border: '1px solid',
      borderColor: 'gray_1',
      px: 4,
      py: 3,
      '&:focus,&:not(:placeholder-shown)': {
        outline: 'none',
        borderColor: 'gray_0',
      },
      '::placeholder,:-ms-input-placeholder,::-ms-input-placeholder': {
        color: 'gray_0',
      },
      '&:disabled,&[disabled]': {
        bg: 'highlight',
        color: 'muted',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      '*': { boxSizing: 'border-box' },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h5: {
      variant: 'text.heading',
      fontWeight: 'normal',
      fontSize: 4,
    },
    h6: {
      variant: 'text.heading',
      textTransform: 'uppercase',
      fontWeight: 'normal',
      fontSize: 2,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
} as Theme;

theme.forms!.error = {
  ...theme.forms!.input,
  borderColor: 'error',
  '&:focus,&:not(:placeholder-shown)': {
    outline: 'none',
    borderColor: 'error',
  },
};

export default theme;
