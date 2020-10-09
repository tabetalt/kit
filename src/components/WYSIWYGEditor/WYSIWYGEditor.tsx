/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { useCallback, useMemo, useState } from 'react';
import { jsx } from 'theme-ui';
import isHotkey from 'is-hotkey';
import { Editable, withReact, useSlate, Slate, ReactEditor } from 'slate-react';
import { Editor, Transforms, createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Button, Icon, Toolbar } from './EditorComponents';
import './WYSIWYGEditor.css';
  
const HOTKEYS: {[key: string]: string} = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export const WYSIWYGEditor = (props: any) => {
    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    // Keep track of state for the value of the editor.
    const [value, setValue] = useState<Node[]>(props.text);

    return (
      // Add the editable component inside the context.
      <div className='container'>
        <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
            <Toolbar>
                <MarkButton format="bold" icon="format_bold" />
                <MarkButton format="italic" icon="format_italic" />
                <MarkButton format="underline" icon="format_underlined" />
                <MarkButton format="code" icon="code" />
                <BlockButton format="heading-one" icon="looks_one" />
                <BlockButton format="heading-two" icon="looks_two" />
                <BlockButton format="block-quote" icon="format_quote" />
                <BlockButton format="numbered-list" icon="format_list_numbered" />
                <BlockButton format="bulleted-list" icon="format_list_bulleted" />
            </Toolbar>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Enter some rich text…"
                spellCheck
                autoFocus
                onKeyDown={event => {
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
      </div>
    )
};

const toggleBlock = (editor: ReactEditor, format: any) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)
  
    Transforms.unwrapNodes(editor, {
      match: n => LIST_TYPES.includes(n.type as string),
      split: true,
    })
  
    Transforms.setNodes(editor, {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    })
  
    if (!isActive && isList) {
      const block = { type: format, children: [] }
      Transforms.wrapNodes(editor, block)
    }
  }
  
const toggleMark = (editor: ReactEditor, format: any) => {
    const isActive = isMarkActive(editor, format)
  
    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
}
  
const isBlockActive = (editor: ReactEditor, format: any) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === format,
    })
  
    return !!match
}
  
const isMarkActive = (editor: ReactEditor, format: any) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}
  
const Element = ({ attributes, children, element }: { 
        attributes: any, 
        children: any, 
        element: any
    }) => {
    switch (element.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
      default:
        return <p {...attributes}>{children}</p>
    }
}
  
const Leaf = ({ attributes, children, leaf }: {
      attributes: any,
      children: any,
      leaf: any
    }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }
  
    if (leaf.code) {
      children = <code>{children}</code>
    }
  
    if (leaf.italic) {
      children = <em>{children}</em>
    }
  
    if (leaf.underline) {
      children = <u>{children}</u>
    }
  
    return <span {...attributes}>{children}</span>
}
  
const BlockButton = ({ format, icon }: {
      format: string,
      icon: string
  }) => {
    const editor = useSlate()
    return (
      <Button
        active={isBlockActive(editor, format)}
        onMouseDown={(event: any) => {
          event.preventDefault()
          toggleBlock(editor, format)
        }}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
}
  
  const MarkButton = ({ format, icon }: {
        format: string,
        icon: string
    }) => {
    const editor = useSlate()
    return (
      <Button
        active={isMarkActive(editor, format)}
        onMouseDown={(event: any) => {
          event.preventDefault()
          toggleMark(editor, format)
        }}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }
  