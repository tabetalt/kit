import React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  args: {
    label: '',
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultSwitch = (props: any) => (
  <Switch label="Enable email alerts?" {...props} />
);
