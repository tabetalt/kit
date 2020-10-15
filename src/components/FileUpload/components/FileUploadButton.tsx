/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { UploadIcon } from '../../../icons';
import { Button } from '../../Button/Button';
import { ButtonProps } from 'theme-ui';

export type FileUploadButtonProps = {} & ButtonProps;

export const FileUploadButton: React.FC<FileUploadButtonProps> = (props) => (
  <Button
    variant="outline"
    sx={{ display: 'inline-flex', alignItems: 'center' }}
    {...props}
  >
    <span>Upload</span>
    <UploadIcon size={18} sx={{ ml: 2 }} />
  </Button>
);
