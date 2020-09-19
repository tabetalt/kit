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
  onClick: LoaderButtonOnClickEvent;
}

export const LoaderButton: ForwardRef<
  HTMLButtonElement,
  LoaderButtonProps
> = React.forwardRef(({ children, onClick, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowLoader(false);
      }, 5000);
    }
  }, [isLoading]);
  const isCompleted = showLoader && !isLoading;
  return (
    <Button
      ref={ref}
      onClick={(event: React.FormEvent<HTMLButtonElement>) => {
        setShowLoader(true);
        setIsLoading(true);
        return onClick && onClick(event, () => setIsLoading(false));
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
      <Text>{children}</Text>
      {showLoader && (
        <LoaderIcon
          sx={{ color: 'white', height: '1rem', ml: 2 }}
          isCompleted={isCompleted}
        />
      )}
    </Button>
  );
});
