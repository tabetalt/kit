import React, { PropsWithChildren, Ref } from 'react';
import { BaseProps } from '../editor-base-props';

export const EditorIcon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<HTMLSpanElement>,
  ) => (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <span
        {...props}
        ref={ref}
        className={`material-icons ${className ? className : ''}`}
      />
    </div>
  ),
);
