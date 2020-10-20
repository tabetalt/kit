/** @jsx jsx */
import React, { useEffect, useRef } from 'react';
import { Text, Container, ForwardRef, jsx } from 'theme-ui';
import './InfoButton.css';
import { SettingsIcon } from '../../icons';

export const InfoButton: ForwardRef<
  HTMLButtonElement,
  { header: string; content: string }
> = React.forwardRef(({ header, content, ...props }, ref) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        var popup = document.getElementById('popup');
        if (popup) {
          popup.classList.remove('show');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <Container ref={wrapperRef}>
      <button
        ref={ref}
        className="popup"
        onClick={() => {
          const popup = document.getElementById('popup');
          if (popup) {
            popup.classList.toggle('show');
          }
        }}
      >
        <SettingsIcon sx={{ color: '#1B202E', size: '15px' }} />
        <div className="popuptext" id="popup">
          <Text className="text" sx={{ fontWeight: 'bold' }}>
            {header}
          </Text>
          <Text className="text">{content}</Text>
        </div>
      </button>
    </Container>
  );
});
