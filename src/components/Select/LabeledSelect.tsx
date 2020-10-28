import React from 'react';
import {
  Label,
  ForwardRef,
  Flex,
  Select,
  SelectProps,
  Container,
} from 'theme-ui';

interface LabeledSelectProps extends SelectProps {
  label: string;
}

export const LabeledSelect: ForwardRef<
  HTMLSelectElement,
  LabeledSelectProps
> = React.forwardRef(({ children, label, name, ...props }) => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Label
        htmlFor={name}
        sx={{ width: 'auto', minWidth: '8.75rem', flexGrow: 1 }}
      >
        {label}
      </Label>
      <Container sx={{ flexGrow: 3 }}>
        <Select id={name} name={name} {...props}>
          {children}
        </Select>
      </Container>
    </Flex>
  );
});
