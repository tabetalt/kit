/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { PropsWithChildren, Ref } from "react";
import { jsx } from 'theme-ui';

interface BaseProps {
    className: string
    [key: string]: unknown
};

export const Button = React.forwardRef(
    (
      {
        className,
        active,
        reversed,
        ...props
      }: PropsWithChildren<
        {
          active: boolean
          reversed: boolean
        } & BaseProps
      >,
      ref: Ref<HTMLSpanElement>
    ) => (
      <span
        {...props}
        ref={ref}
        className={className}
        sx = {{
            cursor: 'pointer',
            color: reversed
              ? active
                ? 'white'
                : '#aaa'
              : active
              ? 'black'
              : '#ccc'
        }}
      />
    )
  )
  
  export const Icon = React.forwardRef(
    (
      { className, ...props }: PropsWithChildren<BaseProps>,
      ref: Ref<HTMLSpanElement>
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
          sx={{
              fontSize: '18px',
              verticalAlign: 'text-bottom'
          }}
        />
      </div>
    )
  )

export const Menu = React.forwardRef(
    (
      { className, ...props }: PropsWithChildren<BaseProps>,
      ref: Ref<HTMLDivElement>
    ) => (
      <div
        {...props}
        ref={ref}
        className={className}
        sx={{
            '& > *': {
                display: 'inline-block'
            },
            '& > * + *': {
                marginLeft: '15px'
            }
        }}
      />
    )
)

export const Toolbar = React.forwardRef(
    (
      { className, ...props }: PropsWithChildren<BaseProps>,
      ref: Ref<HTMLDivElement>
    ) => (
      <Menu
        {...props}
        ref={ref}
        className={className}
        sx={{
            position: 'relative',
            padding: '1px 18px 17px',
            marginBottom: '20px',
        }}
      />
    )
)