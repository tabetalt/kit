/** @jsx jsx */
import React from 'react';
import { ForwardRef, jsx } from 'theme-ui';

const sx = {
  textDecoration: 'none',
  background: '0 0',
  border: 0,
  outline: 0,
  padding: 0,
  width: 4,
  height: 4,
  fontSize: 1,
  cursor: 'pointer',
  color: 'secondary',
};

type CloseButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const CloseButton: ForwardRef<
  HTMLButtonElement,
  CloseButtonProps
> = React.forwardRef(({ ...props }, ref) => (
  <button ref={ref} sx={sx} type="button" aria-label="Close" {...props}>
    &#x2715;
  </button>
));
