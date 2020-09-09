import React from 'react';
import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';
import { Styled } from 'theme-ui';

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
    <Styled.h6>Color Palette</Styled.h6>
    <ColorPalette />
  </>
);
