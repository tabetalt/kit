import React from 'react';
import { Label, Input, ForwardRef, FieldProps, Flex } from 'theme-ui';
import { getMargin, omitMargin } from '../util';

export const Field: ForwardRef<
  HTMLDivElement,
  FieldProps<any>
> = React.forwardRef(({ as: Control = Input, label, name, ...props }, ref) => {
  return (
    <Flex {...getMargin(props)} sx={{ alignItems: 'center' }}>
      <Label
        htmlFor={name}
        sx={{ width: 'auto', minWidth: '8.75rem', flexGrow: 1 }}
      >
        {label}
      </Label>
      <Control
        ref={ref}
        id={name}
        name={name}
        {...omitMargin(props)}
        sx={{ flexGrow: 3 }}
      />
    </Flex>
  );
});

Field.displayName = 'Field';
