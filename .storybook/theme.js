import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#FFA665',
  colorSecondary: '#1B202E',

  // UI
  appBg: '#F6F6F9',
  appContentBg: '#F6F6F9',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"DM Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1B202E',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#F6F6F9',
  barSelectedColor: '#F6F6F9',
  barBg: '#1B202E',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Tabetalt Kit',
  brandUrl: 'https://tabetalt.no',
  brandImage: '/tabetalt-logo.png',
});
