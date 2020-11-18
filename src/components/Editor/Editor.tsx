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
import { serializeHTML } from './serializeHTML';
import { deserializeHTML } from './deserializeHTML';

const HOTKEYS: { [key: string]: string } = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

export interface EditorProps {
  value?: string | null;
  toolbar?: boolean;
  placeholder?: string;
  spellCheck?: boolean;
  autoFocus?: boolean;
  onChange?: (htmlData: string | null) => void;
}

export const Editor: React.FC<EditorProps> = ({
  value = '<p><span> </span></p>',
  toolbar = true,
  placeholder,
  spellCheck,
  autoFocus,
  onChange,
}) => {
  const renderElement = useCallback(
    (props) => <EditorElement {...props} />,
    [],
  );
  const renderLeaf = useCallback((props) => <EditorLeaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const document = new DOMParser().parseFromString(value ? value : '<p><span> </span></p>', 'text/html');
  const deserealizedText = deserializeHTML(document.body);
  const [editorText, setEditorText] = useState<Node[]>(deserealizedText);

  return (
    <Container sx={style}>
      <Container className="editor-container">
        <Slate
          editor={editor}
          value={editorText}
          onChange={(newValue) => {
            if (onChange) {
              const htmlText = serializeHTML({ children: newValue });
              console.log(htmlText)
              onChange(htmlText);
            }
            setEditorText(newValue);
          }}
        >
          {toolbar && (
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
          )}
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
