import React from 'react';
import { Label, Input, ForwardRef, FieldProps, Flex } from 'theme-ui';
import { getMargin, omitMargin } from '../util';

export interface FieldsProps extends FieldProps<any> {
  alignItems?: string;
}

export const Field: ForwardRef<HTMLDivElement, FieldsProps> = React.forwardRef(
  (
    { as: Control = Input, label, name, alignItems = 'center', ...props },
    ref,
  ) => {
    return (
      <Flex {...getMargin(props)} sx={{ alignItems }}>
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
  },
);

Field.displayName = 'Field';
