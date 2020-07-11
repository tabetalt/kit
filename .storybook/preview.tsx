import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme';
import { ThemeProvider, Container } from 'theme-ui';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Container p={4}>{story()}</Container>
  </ThemeProvider>
));

configure(
  [require.context('../src/', true, /\.stories\.(tsx|mdx)$/)],
  module,
);
