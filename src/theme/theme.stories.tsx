import React from 'react';
import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';
import { Styled, Box, Text } from 'theme-ui';

export default { title: 'Styleguide' };

export const lightMode = () => (
  <>
    <Styled.h6>Type Specimens</Styled.h6>
    <TypeStyle fontSize={7}>System Font (Body)</TypeStyle>
    <TypeStyle
      fontFamily="heading"
      fontWeight="heading"
      lineHeight="heading"
      fontSize={7}
    >
      Heading
    </TypeStyle>
    <TypeStyle fontFamily="monospace" fontSize={7}>
      Monospace
    </TypeStyle>
    <Styled.h6>Type Scale</Styled.h6>
    <TypeScale fontWeight="heading" />
    <Styled.h6>Typography</Styled.h6>
    <Box>
      <Styled.h1>The quick brown fox jumps over the the lazy dog</Styled.h1>
      <Box sx={{ fontSize: 3 }}>
        A peep at some distant orb has power to raise and purify our thoughts
        like a strain of sacred music, or a noble picture, or a passage from the
        grander poets. It always does one good.
      </Box>
    </Box>
    <Box
      sx={{
        '>div': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          my: 3,
          '>div:first-child': {
            mx: 3,
          },
        },
      }}
    >
      <Box>
        <Box>h1</Box>
        <Styled.h1>The quick brown fox jumps over the lazy dog</Styled.h1>
      </Box>
      <Box>
        <Box>h2</Box>
        <Styled.h2>The quick brown fox jumps over the lazy dog</Styled.h2>
      </Box>
      <Box>
        <Box>h3</Box>
        <Styled.h3>The quick brown fox jumps over the lazy dog</Styled.h3>
      </Box>
      <Box>
        <Box>h4</Box>
        <Styled.h4>The quick brown fox jumps over the lazy dog</Styled.h4>
      </Box>
      <Box>
        <Box>h5</Box>
        <Styled.h5>The quick brown fox jumps over the lazy dog</Styled.h5>
      </Box>
      <Box>
        <Box>h6</Box>
        <Styled.h6>The quick brown fox jumps over the lazy dog</Styled.h6>
      </Box>
      <Box>
        <Box>p</Box>
        <Box>The quick brown fox jumps over the lazy dog</Box>
      </Box>
      <Box>
        <Box>s</Box>
        <Text sx={{ fontSize: 0 }}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </Box>
    </Box>
    <Styled.h6>Color Palette</Styled.h6>
    <ColorPalette />
  </>
);
