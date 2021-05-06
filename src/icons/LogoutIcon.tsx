/**
 * do not edit this file. it's autogenerated.
 */
import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface LogoutIconProps extends BoxProps {
  size?: number;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({ size = 30, ...props }) => (
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
      className="st0"
      d="M255.1 468.6H63.8c-11.7 0-21.3-9.5-21.3-21.3V64.6c0-11.7 9.5-21.3 21.3-21.3h191.4c11.8 0 21.3-9.5 21.3-21.3S267 .7 255.2.7H63.8C28.6.9 0 29.5 0 64.6v382.7c0 35.2 28.6 63.8 63.8 63.8h191.4c11.8 0 21.3-9.5 21.3-21.3s-9.6-21.2-21.4-21.2z"
    />

    <path
      className="st0"
      d="M505.7 240.9L376.4 113.3c-8.3-8.2-21.8-8.1-30.1.2s-8.2 21.8.2 30.1l92.4 91.2H191.4c-11.8 0-21.3 9.5-21.3 21.3s9.5 21.3 21.3 21.3H439l-92.4 91.2c-8.4 8.2-8.4 21.7-.2 30.1 4.2 4.2 9.7 6.3 15.1 6.3s10.8-2 14.9-6.1l129.3-127.6c4-4 6.3-9.4 6.3-15.1 0-5.9-2.3-11.3-6.3-15.3z"
    />
  </Box>
);

export default LogoutIcon;