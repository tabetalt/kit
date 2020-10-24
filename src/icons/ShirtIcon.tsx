/**
 * do not edit this file. it's autogenerated.
 */
import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface ShirtIconProps extends BoxProps {
  size?: number;
}

const ShirtIcon: React.FC<ShirtIconProps> = ({ size = 30, ...props }) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={size + ''}
    height={size + ''}
    viewBox="0 0 30 30"
    {...props}
  >
    <g data-name="Group 390">
      <path
        data-name="Path 252"
        d="M8.67 23.55a1.28 1.28 0 01-1.28-1.28V11.13L5.08 12.7a1.2 1.2 0 01-.64.19 1.18 1.18 0 01-1-.5l-1.55-2.3a1.14 1.14 0 01-.2-.65 1.14 1.14 0 01.51-.95l5.47-3.68h5.18v.45a2 2 0 001.94 1.94 2 2 0 001.95-1.94v-.45h5.6l5.43 3.68-.22.33.22-.33a1.14 1.14 0 01.51 1 1.13 1.13 0 01-.2.64l-1.55 2.3a1.18 1.18 0 01-1 .5 1.12 1.12 0 01-.64-.19l-2.29-1.61v11.14a1.28 1.28 0 01-1.28 1.28zm-.48-1.28a.49.49 0 00.48.49h12.65a.48.48 0 00.48-.49V9.63L25.35 12a.36.36 0 00.2.06.37.37 0 00.3-.16l1.55-2.25a.36.36 0 00.06-.2.34.34 0 00-.15-.3l-5.24-3.54h-4.56A2.76 2.76 0 0114.78 8a2.76 2.76 0 01-2.72-2.39H7.91L2.68 9.15a.34.34 0 00-.16.29.37.37 0 00.07.2l1.55 2.3a.37.37 0 00.3.16.37.37 0 00.2-.07l3.55-2.4v12.64z"
        fill="currentColor"
      />
    </g>
  </Box>
);

export default ShirtIcon;