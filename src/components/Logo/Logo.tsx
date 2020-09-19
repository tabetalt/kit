import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface LogoProps extends BoxProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size, ...props }) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={size + ''}
    height={size + ''}
    viewBox="0 0 600 150"
    {...props}
  >
    <path
      d="M217.68 187.78l24-14.16a8.89 8.89 0 003.18-12L185.15 56a8.75 8.75 0 00-12.06-3.24l-67.82 40a8.88 8.88 0 00-3.19 12l47 83.12h-28.27a5.5 5.5 0 00-5.51 5.48 5.5 5.5 0 005.51 5.49h32a8.68 8.68 0 007.56-4.34 8.88 8.88 0 00.07-8.84l-47.79-84.5 38.38-22.62 33.85 60a5.51 5.51 0 004.81 2.8 5.34 5.34 0 002.69-.71 5.46 5.46 0 002.1-7.46l-34-60.17 16.12-9.49 57.7 101.73-29 17.08a8.82 8.82 0 004.43 16.42h37.69a5.5 5.5 0 005.51-5.49 5.5 5.5 0 00-5.51-5.48z"
      transform="translate(-100.95 -51.53)"
      fill="#f47f5d"
    />
    <path
      d="M429 135.87a32.07 32.07 0 0121.68 9.36 31.59 31.59 0 019.91 21.28 32.55 32.55 0 01-8.95 24.64 31.71 31.71 0 01-24 10.38 35.81 35.81 0 01-20.13-6.53c-6.91-4.87-10.15-12.45-10.15-20.57v-58.16c0-.63.29-1 .95-1.42l9.76-6a1.26 1.26 0 011.85 1.1v32.31c6.41-5.16 10.88-6.73 19.08-6.39zm-.73 53.49a22.15 22.15 0 0013.95-6.2 19.67 19.67 0 006-14.47 20.54 20.54 0 00-20.65-20.54c-5.58 0-8.78 1.56-12.8 5.46s-4.78 8.2-4.92 13.76c-.18 6.79.18 13.36 6.23 18.26 2.08 1.61 7.92 4.08 12.22 3.73zM500.91 135.74a30.33 30.33 0 0122.41 9.66 31.33 31.33 0 019.26 22.66v4.16a.86.86 0 01-.89.95l-48.48 4.16A20.51 20.51 0 00501.8 189a27.91 27.91 0 008.11-1.3 1.07 1.07 0 011.41.73c1 3.63 1.57 5.62 2.33 8.71.29 1.2.58 1.82-.66 2.26a34.14 34.14 0 01-11.19 1.95 31.85 31.85 0 01-23.3-9.66 31.37 31.37 0 01-9.7-23.17 32.12 32.12 0 019.33-23.39 30.57 30.57 0 0122.78-9.39zm18.58 26.11a17.46 17.46 0 00-6.68-10 19.66 19.66 0 00-12.12-3.8 18.43 18.43 0 00-12.78 4.83 19.63 19.63 0 00-6.47 12.27zM645.36 200.41a1 1 0 01-1-.94V117.6a1.59 1.59 0 011-1.69l9.33-5.56c1.51-.79 2.35.13 2.35 1.3v87.82a.94.94 0 01-.95.94zM571 135.49h-14.23v-19.54a1.12 1.12 0 00-1.56-1.1l-9.86 5.87a1.84 1.84 0 00-.95 1.71l.08 60.21a20.84 20.84 0 002.5 10.24 16.17 16.17 0 007.05 6.73 21.2 21.2 0 0013.5 1.23 23.13 23.13 0 002.43-.69c.3-.17.64-.3.93-.49.78-.53.7-1.77.51-2.54-.71-2.93-1-4.18-2-7.79a1 1 0 00-1.3-.72c-1.62.5-3.36 1.39-5.16 1.17a10.41 10.41 0 01-3.31-1.14c-1.86-.92-2.8-2.93-2.8-6v-34.87H571a1 1 0 001-.94v-10.39a1 1 0 00-1-.95zM700 135.61h-14.26v-19.54a1.13 1.13 0 00-1.57-1.1l-9.86 5.87a1.84 1.84 0 00-.95 1.71l.08 60.21A20.84 20.84 0 00675.9 193a16.14 16.14 0 007.06 6.73 21.17 21.17 0 0013.49 1.27 22.46 22.46 0 002.43-.69c.3-.17.64-.29.93-.49.78-.53.71-1.77.52-2.54-.74-3-1-4.22-2.05-8a.86.86 0 00-1-.62c-1.68.48-3.51 1.47-5.4 1.24a10.49 10.49 0 01-3.31-1.14c-1.86-.92-2.79-2.93-2.79-6v-34.87H700a1 1 0 001-.94v-10.39a1 1 0 00-1-.95zM327 134.83h-14.21l-.05-19.54a1.13 1.13 0 00-1.56-1.1l-9.86 5.88a1.84 1.84 0 00-.95 1.7l.08 60.22a20.78 20.78 0 002.5 10.23A16.11 16.11 0 00310 199a21.2 21.2 0 0013.5 1.24 21 21 0 002.43-.7c.3-.17.64-.29.93-.49.78-.52.7-1.76.51-2.53-.73-3-1-4.23-2.06-8a.81.81 0 00-1-.6c-1.7.48-3.53 1.48-5.43 1.25a10.18 10.18 0 01-3.28-1.17c-1.86-.92-2.8-2.92-2.8-6v-34.88H327a.94.94 0 00.95-1v-10.33a1 1 0 00-.95-.96zM630.4 191.5c-2.61 5.61-9.51 8.33-13.53 9-7.21 1.27-15.39 1.43-22.24-1.6a18.48 18.48 0 01-9.11-24.75c5.42-11.4 16.59-12.26 27.69-13.23 2.71-.23 5.33-.51 7.55-.82-.39-5.71-1.2-7.79-2.89-9.54-2.45-2.51-6.81-2.86-10.12-3-4.66-.12-9.94.7-13.66 3.68a.84.84 0 01-1.27 0l-7.94-7.24a.85.85 0 010-1.42 10.54 10.54 0 011.12-1 14.38 14.38 0 011.65-1.27c11.85-7.89 32.7-7.93 41.24 4.91a20.48 20.48 0 011.87 3.48c2.5 5.93 1.7 13.27 1.82 19.65.12 7.65.26 17.89-2.18 23.15zm-9.4-18.23a.84.84 0 00-.85-.85c-5.31 0-10.87-.1-16.09 1-2.58.56-5.4 1.71-7 3.92-3.54 4.89.39 10.74 5.58 12 5.6 1.35 17.29 1 18.22-6.65a89.72 89.72 0 00.14-9.42zM384 191.62c-2.61 5.61-9.51 8.33-13.53 9-7.2 1.26-15.38 1.42-22.24-1.61a18.49 18.49 0 01-9.11-24.75c5.42-11.4 16.59-12.26 27.69-13.23 2.72-.23 5.34-.51 7.56-.82-.4-5.71-1.2-7.79-2.9-9.54-2.45-2.51-6.8-2.86-10.11-3-4.67-.12-9.95.7-13.67 3.68a.84.84 0 01-1.27 0l-7.94-7.24a.86.86 0 010-1.42 10.54 10.54 0 011.12-1 14.38 14.38 0 011.65-1.27c11.86-7.89 32.7-7.93 41.24 4.91a20.48 20.48 0 011.87 3.48c2.5 5.93 1.71 13.27 1.83 19.65.09 7.63.23 17.9-2.19 23.16zm-9.36-18.23a.84.84 0 00-.85-.85c-5.31 0-10.87-.1-16.09 1-2.58.55-5.4 1.7-7 3.91-3.54 4.89.39 10.74 5.58 12 5.6 1.35 17.29 1 18.22-6.65a89.72 89.72 0 00.11-9.41z"
      transform="translate(-100.95 -51.53)"
      fill="currentcolor"
    />
  </Box>
);
