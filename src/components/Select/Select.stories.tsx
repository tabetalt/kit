import React from 'react';
import { Select } from 'theme-ui';
import { LabeledSelect } from './components/LabeledSelect';

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
export const labeledSelect = (props: any) => (
  <LabeledSelect {...props} label="Some text">
    <option>Hello</option>
    <option>World</option>
  </LabeledSelect>
);
