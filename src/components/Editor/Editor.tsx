/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { useCallback, useMemo, useState } from 'react';
import { Container, jsx } from 'theme-ui';
import isHotkey from 'is-hotkey';
import { Editable, withReact, Slate } from 'slate-react';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { toggleMark } from './editor-helpers';
import {
  EditorBlockButton,
  EditorElement,
  EditorLeaf,
  EditorMarkButton,
  EditorToolbar,
} from './components';
import { style } from './style';

const HOTKEYS: { [key: string]: string } = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

export type EditorProps = {
  text?: Node[];
  placeholder?: string;
  spellCheck?: boolean;
  autoFocus?: boolean;
};

export const Editor: React.FC<EditorProps> = ({
  text = [{
    type: 'paragraph',
    children: [ { text: '' }],
  }],
  placeholder,
  spellCheck,
  autoFocus,
}) => {
  const renderElement = useCallback(
    (props) => <EditorElement {...props} />,
    [],
  );
  const renderLeaf = useCallback((props) => <EditorLeaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState<Node[]>(text);

  return (
    <Container sx={style}>
      <Container className="editor-container">
        <Slate
          editor={editor}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        >
          <EditorToolbar>
            <EditorMarkButton format="bold" icon="format_bold" />
            <EditorMarkButton format="italic" icon="format_italic" />
            <EditorMarkButton format="underline" icon="format_underlined" />
            <EditorMarkButton format="code" icon="code" />
            <EditorBlockButton format="heading-one" icon="looks_one" />
            <EditorBlockButton format="heading-two" icon="looks_two" />
            <EditorBlockButton format="block-quote" icon="format_quote" />
            <EditorBlockButton
              format="numbered-list"
              icon="format_list_numbered"
            />
            <EditorBlockButton
              format="bulleted-list"
              icon="format_list_bulleted"
            />
          </EditorToolbar>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder={placeholder}
            spellCheck={spellCheck}
            autoFocus={autoFocus}
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event as any)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }}
          />
        </Slate>
      </Container>
    </Container>
  );
};
