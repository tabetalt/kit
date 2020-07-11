import { Theme } from "theme-ui";

const defaultBadge = {
  backgroundColor: 'gray1',
  borderRadius: '38px',
  color: 'text',
  py: 1,
  px: 3,
};

const badges: Theme['badges'] = {
  primary: defaultBadge,
  success: {
    ...defaultBadge,
    backgroundColor: 'success',
    color: 'background',
  },
  lightest: {
    ...defaultBadge,
    backgroundColor: 'gray2',
    color: 'gray0',
  },
  warning: {
    ...defaultBadge,
    backgroundColor: 'primary',
    color: 'background',
  },
  darker: {
    ...defaultBadge,
    backgroundColor: 'secondary',
    color: 'background',
  },
  error: {
    ...defaultBadge,
    backgroundColor: 'error',
    color: 'background',
  },
};

export default badges;
