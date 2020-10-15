/**
 * do not edit this file. it's autogenerated.
 */
import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface UploadIconProps extends BoxProps {
  size?: number;
}

const UploadIcon: React.FC<UploadIconProps> = ({ size = 30, ...props }) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={size + ''}
    height={size + ''}
    viewBox="0 0 30 30"
    {...props}
  >
    <defs />

    <path
      className="cls-1"
      d="M6.43 25.56h17.14A1.54 1.54 0 0025.11 24v-6.25a.46.46 0 10-.92 0V24a.62.62 0 01-.62.62H6.43a.62.62 0 01-.62-.62v-6.25a.46.46 0 00-.92 0V24a1.54 1.54 0 001.54 1.56z"
    />

    <g id="_4" data-name={4}>
      <path
        className="cls-1"
        d="M15.28 20a.49.49 0 01-.33.13.46.46 0 01-.46-.46l.1-13.52a.46.46 0 01.92 0l-.1 13.52a.49.49 0 01-.13.33z"
        id="Line_1"
        data-name="Line 1"
      />
      <path
        className="cls-1"
        d="M10.54 11.35a.46.46 0 01-.65-.65l4.83-4.83a.46.46 0 01.65.65z"
        id="Line_2"
        data-name="Line 2"
      />
      <path
        className="cls-1"
        d="M20.21 11.35a.46.46 0 01-.65 0l-4.83-4.83a.46.46 0 11.65-.65l4.83 4.83a.46.46 0 010 .65z"
        id="Line_3"
        data-name="Line 3"
      />
    </g>
  </Box>
);

export default UploadIcon;