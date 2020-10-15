/** @jsx jsx */
import React from 'react';
import { jsx, Image } from 'theme-ui';
import { UploadedFile } from '../FileUpload';

export type FileUploadPreviewProps = {
  file: UploadedFile;
};

const styles = {
  width: 6,
  height: 6,
  borderRadius: '16px',
  overflow: 'hidden',
  mr: 3,
  mt: 4,
};

// TODO: add remove button
export const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({
  file,
}) => (
  <div sx={styles}>
    <Image src={file.url} />
  </div>
);
