import React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  args: {
    label: 'Enable email alerts?',
    name: 'alert',
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultSwitch = (props: any) => <Switch {...props} />;
