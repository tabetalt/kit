import React from 'react';
import { useSlate } from 'slate-react';
import { isMarkActive, toggleMark } from '../editor-helpers';
import { EditorIcon } from './EditorIcon';
import { EditorStateButton } from './EditorStateButton';

export const EditorMarkButton = ({
  format,
  icon,
}: {
  format: string;
  icon: string;
}) => {
  const editor = useSlate();
  return (
    <EditorStateButton
      active={isMarkActive(editor, format)}
      onMouseDown={(event: any) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <EditorIcon>{icon}</EditorIcon>
    </EditorStateButton>
  );
};
