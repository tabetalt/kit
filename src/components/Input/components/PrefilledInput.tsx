/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { useState } from 'react';
import './PrefilledInput.css';
import { Container, Flex, Text, jsx } from 'theme-ui';
import { PrefilledInputProps, TextPosition } from './prefilled-input-props';

export const PrefilledInput: React.FC<PrefilledInputProps> = ({
  props,
  textWidth,
  text,
  prefilledText,
  prefilledTextPosition = TextPosition.RIGHT,
  placeholder,
}) => {
  const [value, setValue] = useState<string>(text);

  return (
    <Container
      sx={{
        fontFamily: 'body',
        borderRadius: '23px',
        border: '1px solid',
        borderColor: 'gray1',
        bg: 'white',
        px: 3,
        py: '0.812rem',
      }}
      {...props}
    >
      {prefilledTextPosition === TextPosition.LEFT && (
        <Flex>
          <Text sx={{ flex: '1 1 auto', px: 2 }}>{prefilledText}</Text>
          <input
            sx={{ width: textWidth }}
            type="text"
            placeholder={placeholder}
            className="prefilledInput"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Flex>
      )}
      {prefilledTextPosition === TextPosition.RIGHT && (
        <Flex>
          <input
            sx={{ width: textWidth }}
            type="text"
            placeholder={placeholder}
            className="prefilledInput"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <Text sx={{ flex: '1 1 auto', px: 2 }}>{prefilledText}</Text>
        </Flex>
      )}
    </Container>
  );
};
