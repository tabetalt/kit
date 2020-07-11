import React from 'react';
import { Radio, Label } from 'theme-ui';

export default {
  title: 'Radio',
  component: Radio,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultRadio = (props: any) => (
  <Label>
    <Radio {...props} />
    Default Radio
  </Label>
);

export const checkedRadio = (props: any) => (
  <Label>
    <Radio checked {...props} />
    Checked Radio
  </Label>
);

export const disabledRadio = (props: any) => (
  <Label>
    <Radio {...props} disabled />
    Checked Radio
  </Label>
);
