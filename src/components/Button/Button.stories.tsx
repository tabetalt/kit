import React from 'react';
import { Button } from '@theme-ui/components';

export default { title: 'Button' };

export const defaultButton = () => <Button>Default button</Button>;
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
