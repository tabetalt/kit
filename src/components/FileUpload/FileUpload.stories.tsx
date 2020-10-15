import React from 'react';
import { FileUpload, UploadedFile } from './FileUpload';

export default {
  title: 'FileUpload',
  component: FileUpload,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const upload: (files: FileList) => Promise<UploadedFile[]> = (
  files: FileList,
) =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          Array.from(files).map(() => ({
            url: 'https://via.placeholder.com/320',
          })),
        ),
      1000,
    );
  });

export const defaultFileUpload = () => <FileUpload upload={upload} />;

export const prefilledFileUpload = () => (
  <FileUpload
    upload={upload}
    value={[
      { url: 'https://via.placeholder.com/320' },
      { url: 'https://via.placeholder.com/320' },
    ]}
  />
);
