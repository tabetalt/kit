/**
 * do not edit this file. it's autogenerated.
 */
import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface PencilIconProps extends BoxProps {
  size?: number;
}

const PencilIcon: React.FC<PencilIconProps> = ({ size = 30, ...props }) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={size + ''}
    height={size + ''}
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      data-name="Path 318"
      d="M14.37 9.64L7.25 19a.83.83 0 00-.19.45L6.48 24a.94.94 0 001.2 1l5-1.51.11-.14 1.55-2 1.12-1.47 7.88-10.27a.94.94 0 00-.18-1.31L19 5.13a.94.94 0 00-1.32.17L15.5 8.17zm4.1-3.51l3.86 3-10.28 13.42-4 1.2a.29.29 0 01-.36-.31l.49-3.81z"
      fill="currentColor"
    />
  </Box>
);

export default PencilIcon;
