/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import ReactModal, { Props as ReactModalProps, Styles } from 'react-modal';
import { CloseButton } from '../CloseButton/CloseButton';

export const defaultStyle = {
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(154, 160, 181, 0.5)',
  },
  content: {
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%',
    width: '70%',
    maxWidth: '910px',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '9px',
    outline: 'none',
    padding: '64px',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
};

export type ModalProps = {
  header?: React.ReactNode | string;
} & ReactModalProps;

export const Modal: React.FC<ModalProps> = ({ header, children, ...props }) => (
  <ReactModal
    className="TabetaltModal__Content"
    bodyOpenClassName="TabetaltModal__Body--open"
    htmlOpenClassName="TabetaltModal__Html--open"
    portalClassName="TabetaltModalPortal"
    overlayClassName="TabetaltModal__Overlay"
    style={defaultStyle as Styles}
    {...props}
  >
    {React.isValidElement(header) ? (
      header
    ) : header ? (
      <div sx={{ fontSize: 2, mb: 2 }}>{header}</div>
    ) : null}
    {children}
    <CloseButton
      onClick={props.onRequestClose}
      sx={{ position: 'absolute', top: 3, right: 3 }}
    />
  </ReactModal>
);

export const setAppElement = ReactModal.setAppElement;
