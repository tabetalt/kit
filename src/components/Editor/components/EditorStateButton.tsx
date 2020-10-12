/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { PropsWithChildren, Ref } from 'react';
import { jsx } from 'theme-ui';
import { BaseProps } from '../editor-base-props';

export const EditorStateButton = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: Ref<HTMLSpanElement>,
  ) => (
    <span
      {...props}
      ref={ref}
      className={className}
      sx={{
        cursor: 'pointer',
        color: reversed
          ? active
            ? 'white'
            : '#aaa'
          : active
          ? 'black'
          : '#ccc',
      }}
    />
  ),
);
