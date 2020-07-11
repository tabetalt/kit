import React from 'react';
import { Input, Field } from 'theme-ui';

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
