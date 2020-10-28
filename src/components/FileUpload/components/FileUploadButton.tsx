/** @jsx jsx */
import React from 'react';
import { jsx, ButtonProps, Button } from 'theme-ui';
import { UploadIcon } from '../../../icons';
import { LoaderIcon } from '../../LoaderIcon/LoaderIcon';

export type FileUploadButtonProps = {
  loading?: boolean;
} & ButtonProps;

export const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  loading,
  ...props
}) => (
  <Button
    variant="outline"
    sx={{ display: 'inline-flex', alignItems: 'center' }}
    disabled={loading}
    {...props}
  >
    <span>Upload</span>
    {!loading ? (
      <UploadIcon size={16} sx={{ ml: 2 }} />
    ) : (
      <LoaderIcon sx={{ height: '1rem', ml: 2 }} />
    )}
  </Button>
);
