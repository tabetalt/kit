import React from 'react';
import { StatusLabel } from './StatusLabel';

export default {
  title: 'StatusLabel',
  component: StatusLabel,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const activeStatusLabel = (props: any) => (
  <StatusLabel label="Active" active {...props} />
);

export const inactiveStatusLabel = (props: any) => (
  <StatusLabel label="Inactive" active={false} {...props} />
);
