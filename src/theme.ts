export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#1B202E',
    background: '#F6F6F9',
    primary: '#FFA665',
    secondary: '#1B202E',
    accent: '#2B40B5',
    highlight: '#E4E6EC',
    muted: '#9AA0B5',
    ...grayscale.reduce((colors: any, curColor, i) => {
      colors[`gray_${i}`] = curColor;
      return colors;
    }, {}),
    error: '#E03B54',
    success: '#00CD98',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      '*': { boxSizing: 'border-box' },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h5: {
      variant: 'text.heading',
      fontWeight: 'normal',
      fontSize: 4,
    },
    h6: {
      variant: 'text.heading',
      textTransform: 'uppercase',
      fontWeight: 'normal',
      fontSize: 2,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};
