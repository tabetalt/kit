import React from 'react';
import { Editor } from './Editor';

export default {
  title: 'Editor',
  component: Editor,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultEditor = (props: any) => (
  <Editor {...props} />
);

export const autoFocusEditor = (props: any) => (
  <Editor {...props} text={textExample} autoFocus={true} />
);

export const spellCheckEditor = (props: any) => (
  <Editor {...props} text={textExample} spellCheck={true} />
);

const textExample = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
];
