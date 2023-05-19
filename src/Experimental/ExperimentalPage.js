import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import './ExperimentalPage.css';
import CardComponentMapper from './CardComponentMapper';
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
          <CardComponentMapper 
            cardId={12}
            cardName={"This IS Card"}
            cardIconPath={""}
            cardIconImg={""}
            isCardStackable={true}
            maxCardStack={99}/>
        </div>
      </Draggable>
    </div>
  );
};

export default ExperimentalPage;
