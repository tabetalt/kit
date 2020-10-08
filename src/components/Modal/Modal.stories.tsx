import React, { useState } from 'react';
import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const DefaultModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Open modal</button>

      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        <h1>Default modal</h1>
        <button onClick={() => setOpen(!open)}>Close modal</button>
      </Modal>
    </>
  );
};

export const defaultModal = () => <DefaultModal />;
