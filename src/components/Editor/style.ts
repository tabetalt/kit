export const style = {
  '.editor-container': {
    border: '1px solid',
    borderColor: 'gray1',
    borderRadius: '23px',
    padding: '10px 19px 10px 19px',
    backgroundColor: '#ffffff',
  },

  blockquote: {
    borderLeft: '2px solid #ddd',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: '10px',
    color: '#aaa',
    fontStyle: 'italic',
  },

  "blockquote[dir='rtl']": {
    borderLeft: 'none',
    paddingLeft: 0,
    paddingRight: '10px',
    borderRight: '2px solid #ddd',
  },

  ':not(pre) > code': {
    fontFamily: 'monospace',
    backgroundColor: '#eee',
    padding: '3px',
  },
};
