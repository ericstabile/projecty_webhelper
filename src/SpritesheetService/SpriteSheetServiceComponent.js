import React, { useState } from 'react';
import SpriteSheetFileHandler from './SpriteSheetFileHandler';
import './SpriteSheetServiceComponent.css';

const SpriteSheetServiceComponent = () => {
  const [url, setUrl] = useState(null);
  const [spriteWidth, setSpriteWidth] = useState(32);
  const [spriteHeight, setSpriteHeight] = useState(32);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setUrl(null);
    }
  };

  return (
    <div className="SpriteSheetServiceComponent">
      <div className="InputFields">
        <label>
          Choose File
          <input type="file" accept=".png" onChange={handleFileChange} />
        </label>
      </div>
      {url && (
        <div className="SpriteDisplay">
          <SpriteSheetFileHandler
            url={url}
            spriteWidth={parseInt(spriteWidth)}
            spriteHeight={parseInt(spriteHeight)}
          />
        </div>
      )}
    </div>
  );
};

export default SpriteSheetServiceComponent;
