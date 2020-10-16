import React from 'react';
import { InfoButton } from './InfoButton';

export default {
  title: 'InfoButton',
  component: InfoButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultInfoButton = () => (
  <InfoButton
    header="MVA satsen til dine produkter"
    content="Dette er MVA satsen som vil bli satt på produkter du oppretter. 
    Du kan også spesifisere MVA sats på produkter direkte dersom du selger varer med ulik MVA sats."
  />
);
