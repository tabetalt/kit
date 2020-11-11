/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import React, { MutableRefObject, useEffect, useState } from 'react';
import { Container, Flex, Text, jsx, Input, Label, ForwardRef } from 'theme-ui';
import { PrefilledInputProps, TextPosition } from './prefilled-input-props';

export const PrefilledInput: ForwardRef<
  HTMLInputElement,
  PrefilledInputProps
> = React.forwardRef(
  (
    {
      value = '',
      prefilledText,
      label,
      name,
      prefilledTextPosition = TextPosition.RIGHT,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const spanRef = React.createRef<HTMLSpanElement>();
    const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);
    const [focused, setFocus] = useState<boolean>(false);
    const [inputWidth, setInputWidth] = useState<string>();

    useEffect(() => {
      if (!spanRef.current) {
        setInputWidth('auto');
        return;
      }

      if (placeholder && placeholder.length !== 0) {
        spanRef.current.textContent = placeholder;
      } else if (value && value.length !== 0) {
        spanRef.current.textContent = value;
      }
      setInputWidth(spanRef.current.offsetWidth + 'px');
    }, []);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // the hidden span takes the value of the input;
      if (spanRef.current) {
        let inputWidth = 'auto';
        if (event.target.value.length !== 0) {
          spanRef.current.textContent = event.target.value;
          inputWidth = spanRef.current.offsetWidth + 'px';
        } else if (placeholder && placeholder.length !== 0) {
          spanRef.current.textContent = placeholder;
          inputWidth = spanRef.current.offsetWidth + 'px';
        }

        setInputWidth(inputWidth); // apply width of the span to the input
      }
      //setInputText(event.target.value);
      if (props.onChange) {
        props.onChange(event);
      }
    };

    const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocus(true);
      if (props.onFocus) {
        props.onFocus(event);
      }
    };

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocus(false);
      if (props.onFocus) {
        props.onFocus(event);
      }
    };

    return (
      <Flex sx={{ alignItems: 'center' }}>
        {name && label && (
          <Label
            htmlFor={name}
            sx={{ width: 'auto', minWidth: '8.75rem', flexGrow: 1 }}
          >
            {label}
          </Label>
        )}
        <Container
          sx={{
            cursor: 'pointer',
            borderRadius: '23px',
            border: '1px solid',
            borderColor: focused || value.length !== 0 ? 'gray0' : 'gray1',
            px: 3,
            py: '0.812rem',
            flexGrow: 3,
          }}
          onClick={() => inputRef?.focus()}
        >
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
                m: '0 5px 0 5px',
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
                width: inputWidth,
                border: 'none',
                borderColor: 'inherit',
                boxShadow: 'none',
                padding: 0,
                borderRadius: 0,
              }}
              ref={(node) => {
                setInputRef(node);
                if (typeof ref === 'function') {
                  ref(node);
                } else if (ref) {
                  (ref as MutableRefObject<HTMLInputElement | null>).current = node;
                }
              }}
              type="text"
              placeholder={placeholder}
              value={value}
              name={name}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <span
              ref={spanRef}
              sx={{
                position: 'absolute',
                left: '-9999px',
                top: '-9999px',
              }}
            >
              {value}
            </span>
          </Flex>
        </Container>
      </Flex>
    );
  },
);
