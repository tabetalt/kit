import React from 'react';
import { Badge } from 'theme-ui';

export default {
  title: 'Badge',
  component: Badge,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultBadge = (props: any) => (
  <Badge variant="primary" {...props}>
    Default Badge
  </Badge>
);

export const successBadge = (props: any) => (
  <Badge variant="success" {...props}>
    Success Badge
  </Badge>
);

export const lightestBadge = (props: any) => (
  <Badge variant="lightest" {...props}>
    Lightest Badge
  </Badge>
);

export const warningBadge = (props: any) => (
  <Badge variant="warning" {...props}>
    Warning Badge
  </Badge>
);

export const darkerBadge = (props: any) => (
  <Badge variant="darker" {...props}>
    Darker Badge
  </Badge>
);

export const errorBadge = (props: any) => (
  <Badge variant="error" {...props}>
    Error Badge
  </Badge>
);
