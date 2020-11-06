/** @jsx jsx */
import React from 'react';
import { Flex, jsx } from 'theme-ui';
import { OptionViewListProps } from './option-view-list.props';
import { OptionView } from './OptionView';

export const OptionViewList: React.FC<OptionViewListProps> = ({
  children,
  data,
  loadingText,
  completedText,
  previewText,
  onSelectClick,
  onPreviewClick,
  ...props
}) => {
  const select = (element: React.FormEvent<Element>, done: () => void) => {
    debugger;
  };

  const preview = (element: React.FormEvent<Element>) => {
    debugger;
  };

  return (
    <Flex sx={{ justifyContent: 'space-between' }} {...props}>
      {data.map((dataOfElement, index) => {
        <OptionView
          key={dataOfElement.id ? dataOfElement.id : index}
          completedText={completedText}
          contentName={dataOfElement.contentName}
          loadingText={loadingText}
          previewText={previewText}
          highlighted={dataOfElement.highlighted}
          onSelectClick={(event, done) => select(event, done)}
          onPreviewClick={(event) => preview(event)}
        >
          {dataOfElement.children}
        </OptionView>;
      })}
    </Flex>
  );
};
