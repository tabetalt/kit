/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { Button, ForwardRef, ButtonProps, Text } from 'theme-ui';
import { jsx } from 'theme-ui';
import { LoaderIcon } from '../LoaderIcon/LoaderIcon';

export type LoaderButtonOnClickEvent = (
  event: React.FormEvent<HTMLButtonElement>,
  done: () => void,
) => void;
export interface LoaderButtonProps extends Omit<ButtonProps, 'onClick'> {
  initialChildren: React.ReactNode;
  completedChildren: React.ReactNode;
  onClick: LoaderButtonOnClickEvent;
}

export const LoaderButton: ForwardRef<
  HTMLButtonElement,
  LoaderButtonProps
> = React.forwardRef(
  ({ initialChildren, completedChildren, onClick, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [text, setText] = useState(initialChildren);
    useEffect(() => {
      if (!isLoading) {
        setTimeout(() => {
          setShowLoader(false);
          setText(initialChildren);
        }, 5000);
      }
    }, [isLoading, text, initialChildren]);
    const isCompleted = showLoader && !isLoading;
    return (
      <Button
        ref={ref}
        onClick={(event: React.FormEvent<HTMLButtonElement>) => {
          setShowLoader(true);
          setIsLoading(true);
          return (
            onClick &&
            onClick(event, () => {
              setIsLoading(false);
              setText(completedChildren);
            })
          );
        }}
        sx={{
          '&:disabled,&[disabled]': {
            color: 'white',
            bg: isCompleted ? 'success' : 'primary',
          },
          display: 'flex',
          alignItems: 'center',
        }}
        disabled={showLoader}
        {...props}
      >
        <Text>{text}</Text>
        {showLoader && (
          <LoaderIcon
            sx={{ color: 'white', height: '1rem', ml: 2 }}
            isCompleted={isCompleted}
          />
        )}
      </Button>
    );
  },
);
