import React from 'react';
import { Checkbox, Label } from 'theme-ui';

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultCheckbox = (props: any) => (
  <Label>
    <Checkbox {...props} />
    Default checkbox
  </Label>
);

export const checkedCheckbox = (props: any) => (
  <Label>
    <Checkbox checked {...props} />
    Checked checkbox
  </Label>
);

export const disabledCheckbox = (props: any) => (
  <Label>
    <Checkbox {...props} disabled />
    Checked checkbox
  </Label>
);
