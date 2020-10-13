/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { useState } from 'react';
import { Container, Flex, Text, jsx } from 'theme-ui';
import { PrefilledInputProps, TextPosition } from './prefilled-input-props';
import styles from './styles';

export const PrefilledInput: React.FC<PrefilledInputProps> = ({
  props,
  text = '',
  prefilledText,
  prefilledTextPosition = TextPosition.RIGHT,
  placeholder,
}) => {
  const [value, setValue] = useState<string>(text);
  const letterSize = 8.5;

  let defaultInputWidth = 'auto';
  if (value.length !== 0) {
    defaultInputWidth = `${value.length * letterSize}px`;
  } else if (placeholder) {
    defaultInputWidth = `${placeholder.length * letterSize}px`;
  }

  return (
    <Container className="container" sx={{ ...styles }} {...props}>
      <Flex
        sx={{
          flexDirection:
            prefilledTextPosition === TextPosition.RIGHT
              ? 'row-reverse'
              : 'row',
        }}
      >
        <Text
          sx={{
            flex:
              prefilledTextPosition === TextPosition.RIGHT
                ? '1 0 auto'
                : '0 1 auto',
          }}
        >
          {prefilledText}
        </Text>
        <input
          sx={{
            flexGrow:
              prefilledTextPosition === TextPosition.RIGHT
                ? 0
                : value
                ? value.length / 1000
                : 0,
            width: defaultInputWidth,
          }}
          type="text"
          placeholder={placeholder}
          className="prefilledInput"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Flex>
    </Container>
  );
};
