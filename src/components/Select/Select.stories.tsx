import React from 'react';
import { Select } from 'theme-ui';

export default {
  title: 'Select',
  component: Select,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultSelect = (props: any) => (
  <Select {...props}>
    <option>Hello</option>
    <option>World</option>
  </Select>
);
export const disabledSelect = () => (
  <Select disabled>
    <option>Hello</option>
    <option>World</option>
  </Select>
);
