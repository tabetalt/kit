import React from 'react';
import { OptionView } from './OptionView';

export default {
  title: 'OptionView',
  component: OptionView,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultOptionView = (props: any) => (
  <OptionView
    {...props}
    contentName="Fonts"
    completedText="Valgt"
    loadingText="Bruk"
    previewText="Forhåndsvis"
  />
);
