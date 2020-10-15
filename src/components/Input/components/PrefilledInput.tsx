/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { useState } from 'react';
import { Container, Flex, Text, jsx, Input } from 'theme-ui';
import { PrefilledInputProps, TextPosition } from './prefilled-input-props';

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

  let flexGrow = 0;
  if (prefilledTextPosition === TextPosition.RIGHT && value) {
    flexGrow = value.length / 1000
  }

  return (
    <Container sx={{ 
      borderRadius: '23px',
      border: '1px solid',
      borderColor: 'gray1',
      bg: 'white',
      px: 3,
      py: '0.812rem',
     }} {...props}>
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
        <Input
          sx={{
            flexGrow: flexGrow,
            width: defaultInputWidth,
            border: 'none',
            borderColor: 'inherit',
            boxShadow: 'none',
            padding: 0,
          }}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Flex>
    </Container>
  );
};
