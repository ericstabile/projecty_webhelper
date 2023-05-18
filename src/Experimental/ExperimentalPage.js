import React, { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import './ExperimentalPage.css';
import IDField from './CardComponents/IDField';
import NameField from './CardComponents/NameField';
import IconPathField from './CardComponents/IconPathField';
import IconImgField from './CardComponents/IconImgField';
import IsStackableField from './CardComponents/IsStackableField';
import MaxStackField from './CardComponents/MaxStackField';

const ExperimentalPage = () => {
  const boxRef = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  useEffect(() => {
    const boxElement = boxRef.current;
    if (boxElement) {
      const handleMouseMove = (e) => {
        if (isActive) {
          const rect = boxElement.getBoundingClientRect();
          const x = e.clientX - rect.left; 
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const deltaX = x - centerX;
          const deltaY = y - centerY;
          const rotateX = deltaY / rect.height;
          const rotateY = deltaX / rect.width;
          boxElement.style.transform = `rotateX(${rotateX * 15}deg) rotateY(${rotateY * 15}deg)`;
        }
      };

      const handleMouseLeave = () => {
        boxElement.style.transform = '';
        setIsActive(false);
      };

      const handleClick = () => {
        setIsActive(true);
      };

      boxElement.addEventListener('mousemove', handleMouseMove);
      boxElement.addEventListener('mouseleave', handleMouseLeave);
      boxElement.addEventListener('click', handleClick);

      return () => {
        boxElement.removeEventListener('mousemove', handleMouseMove);
        boxElement.removeEventListener('mouseleave', handleMouseLeave);
        boxElement.removeEventListener('click', handleClick);
      };
    }
  }, [isActive]);

  return (
    <div className="experimental-page">
      <Draggable onDrag={(e, data) => trackPos(data)} position={position}>
        <div ref={boxRef} className="experimental-box">
          <IDField />
          <NameField />
          <IconPathField />
          <IconImgField />
          <IsStackableField />
          <MaxStackField />
        </div>
      </Draggable>
    </div>
  );
};

export default ExperimentalPage;
