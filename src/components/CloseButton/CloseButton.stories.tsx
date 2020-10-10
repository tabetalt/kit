import React from 'react';
import { CloseButton } from './CloseButton';

export default {
  title: 'CloseButton',
  component: CloseButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultCloseButton = () => (
  <CloseButton onClick={() => alert('Close Button Clicked!')} />
);
