import React, { useState } from 'react';
import { InputTags } from './InputTags';
import { TagProps } from './types';

export default {
  title: 'InputTags',
  component: InputTags,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const suggestions = [
  { id: 1, name: 'First' },
  { id: 2, name: 'Second' },
  { id: 3, name: 'Third' },
  { id: 4, name: 'Fourth' },
  { id: 5, name: 'Fifth' },
];

const DefaultInputLoader = ({ tags = [], ...rest }: any) => {
  const [value, setValue] = useState(tags as TagProps[]);

  return (
    <InputTags
      tags={value}
      suggestions={suggestions}
      onChange={setValue}
      {...rest}
    />
  );
};

export const defaultInputTags = () => (
  <DefaultInputLoader placeholderText="Add new tag" />
);

export const withPrefixLabel = () => <DefaultInputLoader prefix="Some Label" />;

export const withPrefilledTags = () => (
  <DefaultInputLoader
    prefix="Some Label"
    tags={[
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
    ]}
  />
);
