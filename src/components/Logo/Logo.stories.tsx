import React from 'react';
import Logo from './Logo';
import { Container } from 'theme-ui';

export default {
  title: 'Logo',
  component: Logo,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultLogo = (props: any) => <Logo {...props} />;
export const inversedLogo = (props: any) => (
  <Container sx={{ bg: 'secondary', p: 3 }}>
    <Logo sx={{ color: 'background' }} {...props} />
  </Container>
);
