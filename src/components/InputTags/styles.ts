import { ThemeUIStyleObject } from 'theme-ui';

export default {
  '&.tabetalt-input-tags__wrapper': {
    position: 'relative',
    fontFamily: 'body',
    '&.disabled': {
      bg: 'highlight',
      color: 'muted',
    },
    '.tabetalt-input-tags__prefix': {
      position: 'absolute',
      zIndex: 1,
      px: 4,
      py: '0.75rem',
      width: '160px',
      borderRight: '1px solid',
      borderColor: '#E1E3EA',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      borderRadius: '23px 0 0 23px',
    },
    '.tabetalt-input-tags': {
      width: '100%',
      px: 4,
      position: 'relative',
      py: '0.35rem',
      border: '1px solid',
      borderColor: 'gray1',
      borderRadius: '23px',
      bg: 'background',
      '&.is-active,&.is-focused': {
        borderColor: 'gray0',
      },
    },
    '&.has-prefix': {
      '.tabetalt-input-tags': {
        pl: '182px',
      },
      '.tabetalt-input-tags__suggestions': {
        left: '160px',
        width: 'calc(100% - 160px)',
      },
    },
    '.tabetalt-input-tags__search-input': {
      maxWidth: '100%',
      m: 0,
      px: 0,
      py: '0.35rem',
      border: 0,
      outline: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontFamily: 'body',
      bg: 'transparent',

      '&:focus,&:not(:placeholder-shown)': {
        outline: 'none',
        borderColor: 'gray0',
      },
      '::placeholder,:-ms-input-placeholder,::-ms-input-placeholder': {
        color: 'gray0',
      },
      '&:disabled,&[disabled]': {
        color: 'muted',
      },
    },
    '.tabetalt-input-tags__selected': {
      display: 'inline',
    },
    '.tabetalt-input-tags__selected-tag': {
      display: 'inline-block',
      boxSizing: 'border-box',
      backgroundColor: 'gray1',
      borderRadius: '38px',
      color: 'text',
      py: 2,
      px: 3,
      mr: 3,
      background: 'gray1',
      border: 'none',
      outline: 'none',
      fontSize: 'body',
      ':after': {
        content: "'\\2715'",
        color: 'gray0',
        ml: 2,
      },
    },
    '.tabetalt-input-tags__search': {
      display: 'inline-block',
      maxWidth: '100%',
    },
    '.tabetalt-input-tags__suggestions': {
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      ul: {
        my: 1,
        p: 0,
        listStyle: 'none',
        bg: 'background',
        border: '1px solid',
        borderColor: 'gray1',
        borderRadius: '4px',
        boxShadow: '0px 3px 6px #00000029',
      },
      li: {
        borderBottom: '1px solid',
        borderColor: 'gray1',
        padding: '4px 8px',
        '&:last-child': {
          borderBottom: 'none',
        },
        '&:hover': {
          cursor: 'pointer',
          bg: 'highlight',
        },
        '&.is-active': {
          bg: '#highlight',
        },
        '&.is-disabled': {
          color: 'muted',
          cursor: 'auto',
        },
        mark: {
          textDecoration: 'underline',
          bg: 'primary',
          fontWeight: 600,
        },
      },
    },
  },
} as ThemeUIStyleObject;
