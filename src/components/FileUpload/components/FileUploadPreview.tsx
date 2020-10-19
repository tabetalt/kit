/** @jsx jsx */
import React from 'react';
import { jsx, Image, ThemeUIStyleObject } from 'theme-ui';
import TrashIcon from '../../../icons/TrashIcon';
import { UploadedFile } from '../FileUpload';

export type FileUploadPreviewProps = {
  file: UploadedFile;
  onRemove?: (file: UploadedFile) => void;
};

const styles = {
  width: 6,
  height: 6,
  borderRadius: '16px',
  overflow: 'hidden',
  mr: 3,
  mt: 4,
  position: 'relative',
  '.remove-button': {
    cursor: 'pointer',
    position: 'absolute',
    top: '8px',
    right: '8px',
    height: '24px',
    opacity: 0,
    transition: 'opacity 200ms',
  },
  '&:hover': {
    '.remove-button': {
      opacity: 1,
    },
  },
} as ThemeUIStyleObject;

// TODO: add remove button
export const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({
  file,
  onRemove,
}) => (
  <div sx={styles}>
    {onRemove && (
      <TrashIcon className="remove-button" onClick={() => onRemove(file)} />
    )}
    <Image src={file.url} />
  </div>
);
