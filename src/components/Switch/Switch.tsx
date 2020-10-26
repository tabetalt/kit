/** @jsx jsx */
import React from 'react';
import { Box, Flex, ForwardRef, jsx, Label } from 'theme-ui';
import { SwitchProps } from './switch-props';

export const Switch: ForwardRef<
  HTMLInputElement,
  SwitchProps
> = React.forwardRef(
  ({ className, variant = 'switch', label, name, ...props }, ref) => {
    return (
      <Flex sx={{ alignItems: 'center' }}>
        {label && name && (
          <Label
            htmlFor={name}
            sx={{ width: 'auto', minWidth: '8.75rem', flexGrow: 1 }}
          >
            {label}
          </Label>
        )}
        <Label sx={{ cursor: 'pointer', flexGrow: 3 }}>
          <Box
            ref={ref}
            as="input"
            type="checkbox"
            {...props}
            sx={{
              position: 'absolute',
              opacity: 0,
              zIndex: -1,
              width: 1,
              height: 1,
              overflow: 'hidden',
            }}
          />
          <Box
            variant={variant}
            className={className}
            sx={{
              padding: 0,
              position: 'relative',
              bg: 'white',
              border: '2px solid #9AA0B5',
              borderRadius: '15px',
              height: '31px',
              width: '67px',
              mr: 2,
              'input:disabled ~ &': {
                opacity: 0.5,
                cursor: 'not-allowed',
              },
              '& > div': {
                display: 'flex',
                alignItems: 'center',
                borderRadius: '50%',
                height: '24px',
                width: '24px',
                margin: '1.5px',
                bg: '#9AA0B5',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                transform: 'translateX(0%)',
                transition: `transform 240ms cubic-bezier(0.165, 0.840, 0.440, 1.000)`,
              },
              'input:checked ~ &': {
                bg: '#00CD98',
                border: '2px solid #00CD98',
                '> div': {
                  transform: 'translateX(155%)',
                  bg: 'white',
                },
              },
            }}
          >
            <Box />
          </Box>
        </Label>
      </Flex>
    );
  },
);
