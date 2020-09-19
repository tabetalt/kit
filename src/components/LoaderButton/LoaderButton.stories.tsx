import React from 'react';
import { LoaderButton, LoaderButtonProps } from './LoaderButton';

export default {
  title: 'LoaderButton',
  component: LoaderButton,
  args: {
    onClick(_, done) {
      setTimeout(() => {
        done();
      }, 1000);
    },
    children: 'Click me!',
  } as LoaderButtonProps,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultLoaderButton = (props: any) => (
  <form>
    <LoaderButton {...props} />
  </form>
);
