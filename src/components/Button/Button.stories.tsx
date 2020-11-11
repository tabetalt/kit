import React from 'react';
import { Button, IconButton } from 'theme-ui';
import { BoxIcon } from '../../icons';

export default {
  title: 'Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultButton = (props: any) => (
  <Button {...props}>Default button</Button>
);

export const outlineButton = () => (
  <Button variant="outline">Outline button</Button>
);

export const disabledButton = () => <Button disabled>Default button</Button>;

export const disabledOutlineButton = () => (
  <Button variant="outline" disabled>
    Outline button
  </Button>
);

export const warningButton = () => (
  <Button variant="warning">Warning button</Button>
);

export const destructiveButton = () => (
  <Button variant="destructive">Welcome to the danger zone</Button>
);

export const iconButton = () => (
  <IconButton>
    <BoxIcon />
  </IconButton>
);
export const disabledIconButton = () => (
  <IconButton disabled>
    <BoxIcon />
  </IconButton>
);
