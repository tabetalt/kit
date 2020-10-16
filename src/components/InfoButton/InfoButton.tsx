/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react';
import { Text, Container, ForwardRef, jsx } from 'theme-ui';
import { SettingsIcon } from '../../icons';

const sx = {
  button: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    background: '0 0',
    border: 0,
    outline: 0,
    padding: 0,
    fontSize: 1,
    cursor: 'pointer',
    color: 'secondary',
  },
  '.infobutton-text-container': {
    background: '#1B202E',
    maxWidth: '374px',
    p: 1,
  },
  '.text': {
    color: 'white',
    fontSize: '12px',
  },
  '.arrow-down': {
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #1B202E',
    ml: 2,
  },
};

export const InfoButton: ForwardRef<
  HTMLButtonElement,
  { header: string; content: string }
> = React.forwardRef(({ header, content, ...props }, ref) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    // TODO: add absolute position
    <Container sx={sx} ref={wrapperRef}>
      {showModal && (
        <div>
          <div className="infobutton-text-container">
            <Text className="text" sx={{ fontWeight: 'bold' }}>
              {header}
            </Text>
            <Text className="text">{content}</Text>
          </div>
          <div className="arrow-down"></div>
        </div>
      )}
      <Container>
        <button ref={ref} onClick={() => setShowModal(!showModal)} {...props}>
          {
            // TODO: change icon from settings to info
          }
          <SettingsIcon sx={{ color: '#1B202E', size: '15px', ml: 2 }} />
        </button>
      </Container>
    </Container>
  );
});
