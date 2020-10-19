import React, { useState } from 'react';
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

const Component = (props: any) => {
  const [value, setValue] = useState(
    props.defaultValue || ([] as UploadedFile[]),
  );

  const onUpload = async (files: FileList) => {
    const result = await upload(files);
    setValue([...value, ...result]);
  };

  const onRemove = () => setValue([...value.splice(1)]);

  return (
    <FileUpload value={value} upload={onUpload} remove={onRemove} {...props} />
  );
};

export const defaultFileUpload = () => <Component />;

export const prefilledFileUpload = () => (
  <Component
    defaultValue={[
      { url: 'https://via.placeholder.com/320' },
      { url: 'https://via.placeholder.com/320' },
    ]}
  />
);

export const erroredFileUpload = () => {
  const onUpload = () =>
    new Promise<UploadedFile[]>((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Some error message.'));
      }, 1000);
    });

  return <FileUpload upload={onUpload} />;
};
