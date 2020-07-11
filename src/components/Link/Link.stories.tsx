import React from 'react';
import { Link } from 'theme-ui';

export default {
  title: 'Link',
  component: Link,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultLink = (props: any) => (
  <Link href="#" {...props}>
    Default Link
  </Link>
);
export const hoverLink = () => <Link variant="hover">I am a hovered link</Link>;
export const focusLink = () => <Link variant="focus">I am a focused link</Link>;
export const visitedLink = () => (
  <Link variant="visited">I am a visited link</Link>
);
