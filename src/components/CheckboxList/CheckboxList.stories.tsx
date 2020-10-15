import React from 'react';
import { CheckboxListProps } from './checkbox-list-props';
import { CheckboxList } from './CheckboxList';

export default {
  title: 'CheckboxList',
  component: CheckboxList,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const checkboxList = (props: any) => (
  <CheckboxList {...props} {...checkBoxExample} />
);

const checkBoxExample: CheckboxListProps = {
  options: [
    {
      id: '1',
      value: 'First option',
      checked: false,
    },
    {
      id: '2',
      value: 'Second option',
      checked: true,
    },
  ],
  disabled: false,
  onChange: (data) => {},
};
