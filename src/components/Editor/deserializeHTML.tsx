import { jsx } from 'slate-hyperscript';

const ELEMENT_TAGS: {
  [key: string]: (el: any) => { type: string; url?: string };
} = {
  A: (el) => ({ type: 'link', url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: 'block-quote' }),
  H1: () => ({ type: 'heading-one' }),
  H2: () => ({ type: 'heading-two' }),
  H3: () => ({ type: 'heading-three' }),
  H4: () => ({ type: 'heading-four' }),
  H5: () => ({ type: 'heading-five' }),
  H6: () => ({ type: 'heading-six' }),
  IMG: (el) => ({ type: 'image', url: el.getAttribute('src') }),
  LI: () => ({ type: 'list-item' }),
  OL: () => ({ type: 'numbered-list' }),
  P: () => ({ type: 'paragraph' }),
  PRE: () => ({ type: 'code' }),
  UL: () => ({ type: 'bulleted-list' }),
};

const TEXT_TAGS: { [key: string]: (el: any) => { [key: string]: boolean } } = {
  CODE: () => ({ code: true }),
  DEL: () => ({ strikethrough: true }),
  EM: () => ({ italic: true }),
  I: () => ({ italic: true }),
  S: () => ({ strikethrough: true }),
  STRONG: () => ({ bold: true }),
  U: () => ({ underline: true }),
};

export const deserializeHTML = (el: HTMLElement | ChildNode) => {
  try {
    if (el.nodeType === 3) {
      return el.textContent;
    } else if (el.nodeType !== 1) {
      return null;
    } else if (el.nodeName === 'BR') {
      return '\n';
    }

    const { nodeName } = el;
    let parent = el;

    if (
      nodeName === 'PRE' &&
      el.childNodes[0] &&
      el.childNodes[0].nodeName === 'CODE'
    ) {
      parent = el.childNodes[0];
    }
    const children: { [key: string]: any } = Array.from(parent.childNodes)
      .map(deserializeHTML)
      .flat();

    if (el.nodeName === 'BODY') {
      return jsx('fragment', {}, children);
    }

    if (ELEMENT_TAGS[nodeName]) {
      const attrs = ELEMENT_TAGS[nodeName](el);
      return jsx('element', attrs, children);
    }

    if (TEXT_TAGS[nodeName]) {
      const attrs = TEXT_TAGS[nodeName](el);
      return children.map((child: any) => jsx('text', attrs, child));
    }

    return children;
  } catch (err) {
    console.error(err);
  }

  return null;
};
