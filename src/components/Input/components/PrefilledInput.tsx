/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { useState } from 'react';
import { Container, Flex, Text, jsx } from 'theme-ui';
import { PrefilledInputProps, TextPosition } from './prefilled-input-props';
import styles from './styles';

export const PrefilledInput: React.FC<PrefilledInputProps> = ({
  props,
  text,
  prefilledText,
  prefilledTextPosition = TextPosition.RIGHT,
  placeholder,
}) => {
  const [value, setValue] = useState<string>(text);

  return (
    <Container className="container" sx={{ ...styles }} {...props}>
      {prefilledTextPosition === TextPosition.LEFT && (
        <Flex>
          <Text sx={{ px: 2, flex: '1 1 auto' }}>{prefilledText}</Text>
          <input
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
            type="text"
            placeholder={placeholder}
            className="prefilledInput"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <Text sx={{ px: 2, flex: '1 1 auto' }}>{prefilledText}</Text>
        </Flex>
      )}
    </Container>
  );
};
