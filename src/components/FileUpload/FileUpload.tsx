/** @jsx jsx */
import React, { useRef, useState } from 'react';
import { jsx, Flex } from 'theme-ui';
import {
  FileUploadButton,
  FileUploadInput,
  FileUploadPreview,
} from './components';

export interface UploadedFile {
  url: string;
}

export interface FileUploadProps {
  value?: UploadedFile[];
  id?: string;
  accept?: string;
  multiple?: boolean;
  buttonComponent?: React.ReactNode;
  validate?: (file: File) => string | void;
  upload: (files: FileList) => Promise<UploadedFile[]>;
}

const defaultProps = {
  value: [],
  accept: 'image/*',
  multiple: false,
};

export const FileUpload: React.FC<FileUploadProps> = (props) => {
  const {
    value,
    id,
    accept,
    multiple,
    buttonComponent,
    validate,
    upload,
  } = props;

  const [loading, setLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState([] as string[]); // eslint-disable-line @typescript-eslint/no-unused-vars

  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => inputRef.current && inputRef.current.click();
  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files: filesToUpload } = event.target;
    if (!filesToUpload?.length) {
      return;
    }
    if (validate) {
      const validationErrors = Array.from(filesToUpload).reduce((acc, file) => {
        const err = validate(file);
        if (err) {
          // @ts-ignore
          acc.push(err);
        }
        return acc;
      }, []);
      if (validationErrors.length) {
        setErrors(validationErrors);
        return;
      }
    }

    setLoading(true);
    try {
      await upload(filesToUpload);
    } catch (err) {
      setErrors([err.message]);
    }
    setLoading(false);
  };

  // TODO: add button loading state, add errors render
  return (
    <label>
      {buttonComponent || <FileUploadButton onClick={onButtonClick} />}
      <FileUploadInput
        id={id}
        inputRef={inputRef}
        onChange={onInputChange}
        accept={accept}
        multiple={multiple}
      />
      {value && value.length > 0 && (
        <Flex>
          {value.map((file, i) => (
            <FileUploadPreview key={i} file={file} />
          ))}
        </Flex>
      )}
    </label>
  );
};

FileUpload.defaultProps = defaultProps;

FileUpload.displayName = 'FileUpload';
