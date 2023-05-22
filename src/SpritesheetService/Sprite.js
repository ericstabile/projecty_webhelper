import React, { useEffect, useRef } from 'react';

const Sprite = ({ img, x, y, spriteWidth, spriteHeight, onMouseOver }) => {
  const canvasRef = useRef(null);
  const scaledWidth = spriteWidth * 1.5;   // Increase the width by 50%
  const scaledHeight = spriteHeight * 1.5; // Increase the height by 50%

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, scaledWidth, scaledHeight);
    ctx.drawImage(img, x, y, spriteWidth, spriteHeight, 0, 0, scaledWidth, scaledHeight);
  }, [img, x, y, spriteWidth, spriteHeight, scaledWidth, scaledHeight]);

  return (
    <canvas
      ref={canvasRef}
      width={scaledWidth}
      height={scaledHeight}
      onMouseOver={onMouseOver}
    />
  );
};

export default Sprite;
