/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Theme, ThemeUIStyleObject } from 'theme-ui';

const sharedInputStyles: ThemeUIStyleObject = {
  fontFamily: 'body',
  borderRadius: '38px',
  border: '1px solid',
  borderColor: 'gray1',
  px: 4,
  py: 3,
  '&:focus,&:not(:placeholder-shown)': {
    outline: 'none',
    borderColor: 'gray0',
  },
  '::placeholder,:-ms-input-placeholder,::-ms-input-placeholder': {
    color: 'gray0',
  },
  '&:disabled,&[disabled]': {
    bg: 'highlight',
    color: 'muted',
  },
};

const forms: Theme['forms'] = {
  checkbox: {
    'input:checked ~ &': { color: 'secondary' },
    'input:disabled ~ &': {
      color: 'gray1',
      bg: 'gray2',
    },
  },
  radio: {
    'input:checked ~ &': { color: 'secondary' },
    'input:disabled ~ &': {
      color: 'gray1',
      bg: 'gray2',
    },
  },
  select: {
    ...sharedInputStyles,
    '& + svg': {
      ml: '-3.125rem',
      // display: 'none',
    },
  },
  input: {
    ...sharedInputStyles,
  },
};

forms!.error = {
  ...forms!.input,
  borderColor: 'error',
  '&:focus,&:not(:placeholder-shown)': {
    outline: 'none',
    borderColor: 'error',
  },
};

export default forms;
