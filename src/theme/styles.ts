import { Theme } from 'theme-ui';

const styles: Theme['styles'] = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    fontSize: '16px',
    color: 'text',
    '*': { boxSizing: 'border-box' },
  },
  h1: {
    variant: 'text.heading',
    fontSize: '4.5rem',
    marginBottom: '48px',
  },
  h2: {
    variant: 'text.heading',
    fontSize: '3.45rem',
    marginBottom: '48px',
  },
  h3: {
    variant: 'text.heading',
    fontSize: '2.30rem',
    marginBottom: '32px',
  },
  h4: {
    variant: 'text.heading',
    fontSize: '1.70rem',
    marginBottom: '24px',
  },
  h5: {
    variant: 'text.heading',
    fontWeight: 'normal',
    fontSize: '1.70rem',
    marginBottom: '24px',
  },
  h6: {
    variant: 'text.heading',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    fontSize: '1.14rem',
    marginBottom: '32px',
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
  a: {
    color: 'accent',
    textDecoration: 'underline',
    '&:hover': {
      variant: 'links.hover',
    },
    '&:focus': {
      variant: 'links.focus',
    },
    '&:visited': {
      variant: 'links.visited',
    },
  },
};

export default styles;
