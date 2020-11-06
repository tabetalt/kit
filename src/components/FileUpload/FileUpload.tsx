/** @jsx jsx */
import React, { useRef, useState } from 'react';
import { jsx, Flex, Text } from 'theme-ui';
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
  remove?: (file: UploadedFile) => void;
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
    remove,
  } = props;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([] as string[]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => inputRef.current && inputRef.current.click();
  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files: filesToUpload } = event.target;
    if (!filesToUpload?.length) {
      return;
    }
    if (validate) {
      const validationErrors = Array.from(filesToUpload).reduce(
        (acc: string[], file) => {
          const err = validate(file);
          if (err) {
            acc.push(err);
          }
          return acc;
        },
        [],
      );
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

  return (
    <div>
      <label htmlFor={id}>
        {buttonComponent || (
          <FileUploadButton loading={loading} onClick={onButtonClick} />
        )}
        <FileUploadInput
          id={id}
          inputRef={inputRef}
          onChange={onInputChange}
          accept={accept}
          multiple={multiple}
        />
      </label>
      {errors && errors.length > 0 && (
        <Text sx={{ color: 'error', mt: 2 }}>{errors.join(' ')}</Text>
      )}
      {value && value.length > 0 && (
        <Flex>
          {value.map((file, i) => (
            <FileUploadPreview key={i} file={file} onRemove={remove} />
          ))}
        </Flex>
      )}
    </div>
  );
};

FileUpload.defaultProps = defaultProps;

FileUpload.displayName = 'FileUpload';
