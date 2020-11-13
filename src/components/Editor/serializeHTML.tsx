import { Text } from 'slate';

export const serializeHTML = (node: { [key: string]: any }) => {
  if (Text.isText(node)) {
    let children = node.text;
    if (node.bold) {
      children = `<strong>${children}</strong>`;
    }

    if (node.code) {
      children = `<code>${children}</code>`;
    }

    if (node.italic) {
      children = `<em>${children}</em>`;
    }

    if (node.underline) {
      children = `<u>${children}</u>`;
    }

    return `<span>${children}</span>`;
  }

  const children = node.children
    .map((n: { children: [] }) => serializeHTML(n))
    .join('');
  switch (node.type) {
    case 'block-quote':
      return `<blockquote style="
        border-left: 2px solid #ddd;
        margin-left: 0;
        margin-right: 0;
        padding-left: 10px;
        color: #aaa;
        font-style: italic;
      ">${children}</blockquote>`;
    case 'bulleted-list':
      return `<ul>${children}</ul>`;
    case 'heading-one':
      return `<h1>${children}</h1>`;
    case 'heading-two':
      return `<h2>${children}</h2>`;
    case 'list-item':
      return `<li>${children}</li>`;
    case 'numbered-list':
      return `<ol>${children}</ol>`;
    case 'paragraph':
      return `<p>${children}</p>`;
    default:
      return children;
  }
};
