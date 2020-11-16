import React from 'react';
import { Editor } from './Editor';

export default {
  title: 'Editor',
  component: Editor,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const defaultEditor = (props: any) => (
  <Editor {...props} value={textExample} />
);

export const withoutToolbarEditor = (props: any) => (
  <Editor {...props} value={textExample} toolbar={false} />
);

export const autoFocusEditor = (props: any) => (
  <Editor {...props} value={textExample} autoFocus={true} />
);

export const spellCheckEditor = (props: any) => (
  <Editor {...props} value={textExample} spellCheck={true} />
);

const textExample = `<p><span>This is editable </span><span><strong>rich</strong></span><span> text, </span><span><em>much</em></span><span> better than a </span><span><code>textarea</code></span><span>!</span></p><p><span>Since it's rich text, you can do things like turn a selection of text </span><span><strong>bold</strong></span><span>, or add a semantically rendered block quote in the middle of the page, like this:</span></p><blockquote style="
border-left: 2px solid #ddd;
margin-left: 0;
margin-right: 0;
padding-left: 10px;
color: #aaa;
font-style: italic;
"><span>A wise quote.</span></blockquote><p><span>Try it out for yourself!</span></p>`;
