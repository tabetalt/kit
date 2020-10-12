/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { PropsWithChildren, Ref } from 'react';
import { jsx } from 'theme-ui';
import { BaseProps } from '../editor-base-props';
import { EditorMenu } from './EditorMenu';

export const EditorToolbar = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<HTMLDivElement>,
  ) => (
    <EditorMenu
      {...props}
      ref={ref}
      className={className}
      sx={{
        position: 'relative',
        marginBottom: '20px',
      }}
    />
  ),
);
