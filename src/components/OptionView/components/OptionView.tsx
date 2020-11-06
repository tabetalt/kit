/** @jsx jsx */
import React, { useState } from 'react';
import { Button, Container, Flex, Text, jsx } from 'theme-ui';
import EyeIcon from '../../../icons/EyeIcon';
import { LoaderButton } from '../../LoaderButton/LoaderButton';
import { OptionViewProps } from './option-view-props';

export const OptionView: React.FC<OptionViewProps> = ({
  children,
  highlighted = false,
  contentName,
  completedText,
  loadingText,
  previewText,
  onSelectClick = (_, done) => {
    setTimeout(() => {
      done();
      setSelected(false);
    }, 1000);
  },
  onPreviewClick = () => {},
  ...props
}) => {
  const [loaderText, setLoaderText] = useState<string>(loadingText);
  const [selected, setSelected] = useState<boolean>(highlighted);

  return (
    <Container
      sx={{
        textAlign: 'center',
      }}
      {...props}
    >
      <Text
        sx={{
          color: 'gray0',
          font: 'normal normal normal 15px/20px DM Sans',
          marginBottom: '15px',
        }}
      >
        {contentName}
      </Text>
      <Container
        sx={{
          border: selected ? '3px solid #00CD98' : '1px solid gray0;',
          borderRadius: '20px',
          width: '317px',
          height: '312px',
          cursor: 'pointer',
        }}
        onClick={() => setSelected(!selected)}
      >
        {children}
      </Container>
      <Flex
        sx={{
          justifyContent: 'center',
          marginTop: '15px',
        }}
      >
        <Button
          variant="outline"
          onClick={(event) => onPreviewClick(event)}
          sx={{ marginRight: '13px' }}
        >
          <Flex>
            {previewText} <EyeIcon size={20} sx={{ margin: '1px 0 0 9px' }} />
          </Flex>
        </Button>
        <LoaderButton
          initialChildren={loaderText}
          completedChildren={completedText}
          onClick={(event, done) => {
            setLoaderText(completedText);
            setSelected(true);
            onSelectClick(event, done);
          }}
        />
      </Flex>
    </Container>
  );
};
