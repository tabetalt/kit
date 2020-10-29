import React from 'react';
import { Label, ForwardRef, Flex, Container } from 'theme-ui';
import { getMargin, omitMargin } from '../util';
import { StatusLabelProps } from './status-label-props';

export const StatusLabel: ForwardRef<
  HTMLDivElement,
  StatusLabelProps
> = React.forwardRef(({ label, active, name, ...props }, ref) => {
  return (
    <Flex {...getMargin(props)} sx={{ alignItems: 'center' }}>
      <Container
        ref={ref}
        id={name}
        name={name}
        {...omitMargin(props)}
        sx={{
          flexGrow: 0,
          width: '16px',
          height: '15px',
          m: '6px',
          backgroundColor: active ? 'success' : 'error',
          borderRadius: '50%',
        }}
      />
      <Label
        htmlFor={name}
        sx={{ width: 'auto', minWidth: '8.75rem', flexGrow: 3 }}
      >
        {label}
      </Label>
    </Flex>
  );
});
