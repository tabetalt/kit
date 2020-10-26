import React from 'react';
import { Input, Field } from 'theme-ui';
import { PrefilledInput } from './components/PrefilledInput';

export default {
  title: 'Input',
  component: Input,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultInput = (props: any) => <Input {...props} />;
export const defaultPlaceholderInput = ({
  placeholder = 'Store Name',
}: any) => <Input placeholder={placeholder} />;
export const errorInput = (props: any) => (
  <Field variant="error" label="Field" name="field" />
);
export const disabledInput = () => <Input disabled />;
export const prefilledInputWithLabel = (props: any) => (
  <PrefilledInput
    {...props}
    placeholder="Your Site Name"
    prefilledText=".com"
    prefilledTextPosition="right"
    label="Produktnavn"
    name="name"
  />
);
export const prefilledInputWithoutLabel = (props: any) => (
  <PrefilledInput
    {...props}
    placeholder="Your Site Name"
    prefilledText=".com"
    prefilledTextPosition="right"
  />
);
