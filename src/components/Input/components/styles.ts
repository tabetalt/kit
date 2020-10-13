import { ThemeUIStyleObject } from 'theme-ui';

export default {
  '.container': {
    fontFamily: 'body',
    borderRadius: '23px',
    border: '1px solid',
    borderColor: 'gray1',
    bg: 'white',
    px: 3,
    py: '0.812rem',
  },
  '.prefilledInput': {
    width: 'auto',
    fontFamily: 'body',
    border: 'none',
    borderColor: 'inherit',
    boxShadow: 'none',
    fontSize: 'inherit',
    margin: 0,
  },

  '.prefilledInput:focus': {
    outline: 'none',
  },

  '.prefilledInput::placeholder,:-ms-input-placeholder,::-ms-input-placeholder': {
    color: 'gray0',
  },
} as ThemeUIStyleObject;
