import { Theme } from 'theme-ui';

const links: Theme['links'] = {
  focus: {
    textDecoration: 'none',
    color: 'secondary',
    border: '1px solid',
    borderColor: 'secondary',
    p: 1,
  },
  visited: {
    textDecoration: 'underline',
    color: 'muted',
  },
  hover: {
    textDecoration: 'underline',
    color: 'primary',
    cursor: 'pointer',
  },
};

export default links;
