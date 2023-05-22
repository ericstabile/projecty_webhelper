import React, { useEffect, useState, useRef } from 'react';
import Sprite from './Sprite';
import SpriteDetailView from './SpriteDetailView';
import SpriteSheetServicePagination from './SpriteSheetServicePagination';
import './SpriteSheetServiceComponent.css';

const SpriteSheetFileHandler = ({ url, spriteWidth, spriteHeight }) => {
  const imgRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [sprites, setSprites] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const spritesPerRow = 16; // Number of sprites per row
  const numRowsPerPage = 6; // Number of rows per page
  const spritesPerPage = spritesPerRow * numRowsPerPage; // Number of sprites per page
  const [selectedSprite, setSelectedSprite] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setLoading(false);
      imgRef.current = img;

      const numSprites = Math.floor(img.width / spriteWidth) * Math.floor(img.height / spriteHeight);
      let newSprites = [];

      for (let i = 0; i < numSprites; i++) {
        const row = Math.floor(i / spritesPerRow);
        const col = i % spritesPerRow;
        const x = col * spriteWidth;
        const y = row * spriteHeight;

        newSprites.push({ img: img, x: x, y: y, spriteWidth: spriteWidth, spriteHeight: spriteHeight });
      }

      setSprites(newSprites);
    };
  }, [url, spriteWidth, spriteHeight, spritesPerRow]);

  const displayedSprites = sprites.slice(currentPage * spritesPerPage, (currentPage + 1) * spritesPerPage);

  const handleSpriteMouseOver = (sprite) => {
    setSelectedSprite(sprite);
  };

  return (
    <div className="SpriteSheetFileHandler">
      {selectedSprite && (
        <SpriteDetailView
          img={selectedSprite.img}
          x={selectedSprite.x}
          y={selectedSprite.y}
          spriteWidth={spriteWidth}
          spriteHeight={spriteHeight}
        />
      )}
      <div className="SpriteContainer">
        {displayedSprites.map((sprite, i) => (
          <Sprite
            key={i}
            img={sprite.img}
            x={sprite.x}
            y={sprite.y}
            spriteWidth={sprite.spriteWidth}
            spriteHeight={sprite.spriteHeight}
            onMouseOver={() => handleSpriteMouseOver(sprite)}
          />
        ))}
      </div>
      <SpriteSheetServicePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        spritesPerPage={spritesPerPage}
        totalSprites={sprites.length}
      />
    </div>
  );
};

export default SpriteSheetFileHandler;
