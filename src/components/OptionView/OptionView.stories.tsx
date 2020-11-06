import React from 'react';
import { OptionView } from './components/OptionView';
import { OptionViewList } from './components/OptionViewList';

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

export const listOfOptionView = (props: any) => {
  <OptionViewList
    {...props}
    data={[
      {
        id: 1,
        contentName: 'Font 1',
      },
      {
        id: 2,
        contentName: 'Font 2',
      },
      {
        id: 3,
        contentName: 'Font 3',
      },
    ]}
    completedText="Valgt"
    loadingText="Bruk"
    previewText="Forhåndsvis"
  />;
};
