import React from 'react';
import LoaderIcon from './LoaderIcon';

export default {
  title: 'LoaderIcon',
  component: LoaderIcon,
  args: {
    isCompleted: false,
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultLoaderIcon = (props: any) => (
  <LoaderIcon {...props} sx={{ width: '200px' }} />
);

export const styledLoaderIcon = (props: any) => (
  <LoaderIcon {...props} sx={{ color: 'blue', width: '200px' }} />
);
