import React, { useState } from 'react';
import { Styled } from 'theme-ui';
import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const DefaultModal = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Open modal</button>

      <Modal isOpen={open} onRequestClose={() => setOpen(false)} {...props}>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
      </Modal>
    </>
  );
};

export const defaultModal = () => <DefaultModal />;

export const modalWithHeader = () => <DefaultModal header="Modal Header" />;

export const modalWithHeaderComponent = () => (
  <DefaultModal header={<Styled.h2>Custom Modal Header</Styled.h2>} />
);
