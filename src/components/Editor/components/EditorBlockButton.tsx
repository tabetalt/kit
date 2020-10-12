import React from 'react';
import { useSlate } from 'slate-react';
import { isBlockActive, toggleBlock } from '../editor-helpers';
import { EditorIcon } from './EditorIcon';
import { EditorStateButton } from './EditorStateButton';

export const EditorBlockButton = ({
  format,
  icon,
}: {
  format: string;
  icon: string;
}) => {
  const editor = useSlate();
  return (
    <EditorStateButton
      active={isBlockActive(editor, format)}
      onMouseDown={(event: any) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <EditorIcon>{icon}</EditorIcon>
    </EditorStateButton>
  );
};
