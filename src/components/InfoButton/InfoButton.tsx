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
        onClick={(event) => {
          const popup = document.getElementById('popup') as HTMLDivElement;
          if (popup) {
            popup.classList.toggle('show');

            if (
              event.pageY < popup.offsetHeight &&
              event.pageY + popup.offsetHeight <
                window.innerHeight + window.pageYOffset
            ) {
              popup.style.bottom = '';
              popup.style.top = '25px';
              popup.classList.remove('up');
              popup.classList.add('down');
            } else {
              popup.style.bottom = '125%';
              popup.style.top = '';
              popup.classList.remove('down');
              popup.classList.add('up');
            }
          }
        }}
      >
        <SettingsIcon sx={{ color: '#1B202E', size: '15px' }} />
        <div className='popuptext up' id="popup">
          <Text className="text" sx={{ fontWeight: 'bold' }}>
            {header}
          </Text>
          <Text className="text">{content}</Text>
        </div>
      </button>
    </Container>
  );
});
