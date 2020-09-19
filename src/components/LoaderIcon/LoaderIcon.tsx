/** @jsx jsx */
import React from 'react';
import { ForwardRef, jsx } from 'theme-ui';
import { motion } from 'framer-motion';

export interface LoaderIconProps {
  isCompleted?: boolean;
}

const LoaderIcon: ForwardRef<SVGSVGElement, LoaderIconProps> = React.forwardRef(
  ({ isCompleted = false, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      {isCompleted ? (
        <motion.path
          d="M1.38,11.013l4.251,4.248L16.612,4.333"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ) : (
        <React.Fragment>
          <circle
            cx="10"
            cy="10"
            r="8.7"
            fill="none"
            stroke="#e1e3ea"
            strokeWidth="2.5"
            strokeMiterlimit="10"
          />
          <motion.circle
            cx="10"
            cy="10"
            r="8.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray="54"
            strokeDashoffset="10"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
          />
        </React.Fragment>
      )}
    </svg>
  ),
);

export default LoaderIcon;
