import React from 'react';

const SpriteDetailView = ({ img, x, y, spriteWidth, spriteHeight }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const scale = 4;  // Increase this to make the sprite bigger
    const scaledWidth = spriteWidth * scale;
    const scaledHeight = spriteHeight * scale;

    ctx.clearRect(0, 0, scaledWidth, scaledHeight);
    ctx.drawImage(img, x, y, spriteWidth, spriteHeight, 0, 0, scaledWidth, scaledHeight);
  }, [img, x, y, spriteWidth, spriteHeight]);

  return (
    <div>
      <canvas ref={canvasRef} width={spriteWidth * 4} height={spriteHeight * 4} />
      <p>Coordinates: ({x/spriteWidth}, {y/spriteHeight})</p>
    </div>
  );
};

export default SpriteDetailView;
