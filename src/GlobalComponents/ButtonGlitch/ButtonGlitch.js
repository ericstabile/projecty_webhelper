import React, { useEffect, useState } from 'react';
import './ButtonGlitch.css';

const ButtonGlitch = ({ clickEventId, buttonText, handleClickEvent }) => {
  const [id, setId] = useState(clickEventId);
  const [bText, setBText] = useState(buttonText);

  useEffect(() => {
    setBText(buttonText);
  }, [buttonText]);

  return (
    <button 
      className="button-glitch"
      role="button"
      onClick={() => handleClickEvent(id)}>
      {bText}
    </button>
  );
}

export default ButtonGlitch;
