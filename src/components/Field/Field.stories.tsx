import React from 'react';
import { Box, Textarea } from 'theme-ui';
import Field from './Field';

export default {
  title: 'Field',
  component: Field,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultField = (props: any) => (
  <Field type="text" label="This is the label" {...props} />
);

export const manyFields = (props: any) => (
  <Box sx={{ '>div': { py: 2 } }}>
    <Field type="text" label="Name" {...props} />
    <Field type="email" label="E-mail" {...props} />
    <Field type="date" label="When?" {...props} />
    <Field
      type="text"
      label="This is probably the longest label you've seen!"
      {...props}
    />
    <Field as={Textarea} label="This is actually a textarea" {...props} />
  </Box>
);
