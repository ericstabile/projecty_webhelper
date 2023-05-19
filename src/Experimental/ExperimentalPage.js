import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import './ExperimentalPage.css';
import IDField from './CardComponents/IDField';
import NameField from './CardComponents/NameField';
import IconPathField from './CardComponents/IconPathField';
import IconImgField from './CardComponents/IconImgField';
import IsStackableField from './CardComponents/IsStackableField';
import MaxStackField from './CardComponents/MaxStackField';
import useBoxTransform from './CustomHook/useBoxTransform';

const ExperimentalPage = () => {
  const boxRef = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  useBoxTransform(boxRef, isActive, setIsActive);

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
