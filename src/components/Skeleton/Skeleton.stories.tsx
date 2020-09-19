import React from 'react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultSkeleton = (props: any) => (
  <Skeleton {...props} sx={{ width: '100%' }} />
);
