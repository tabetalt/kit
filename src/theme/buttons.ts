import { Theme } from 'theme-ui';

const buttons: Theme['buttons'] = {
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
      cursor: 'not-allowed',
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
      bg: 'gray2',
    },
    '&:hover': {
      boxShadow: 'inset 0 0 0 3px var(--theme-ui-colors-secondary, #FFA665)',
    },
    '&:disabled,&[disabled]': {
      cursor: 'not-allowed',
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
      bg: 'gray2',
    },
    '&:disabled,&[disabled]': {
      cursor: 'not-allowed',
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
      cursor: 'not-allowed',
      bg: 'highlight',
      color: 'muted',
    },
  },
  icon: {
    outline: 'none',
    cursor: 'pointer',
    '&:disabled,&[disabled]': {
      cursor: 'not-allowed',
      color: 'muted',
    },
  },
};

export default buttons;
