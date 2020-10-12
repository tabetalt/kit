/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { PropsWithChildren, Ref } from 'react';
import { jsx } from 'theme-ui';
import { BaseProps } from '../editor-base-props';

export const EditorMenu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<HTMLDivElement>,
  ) => (
    <div
      {...props}
      ref={ref}
      className={className}
      sx={{
        '& > *': {
          display: 'inline-block',
        },
        '& > * + *': {
          marginLeft: '15px',
        },
      }}
    />
  ),
);
