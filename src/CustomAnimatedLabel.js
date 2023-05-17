import React, { useEffect, useState } from 'react';

const CustomAnimatedLabel = ({ text }) => {
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTrigger((prevTrigger) => !prevTrigger);
    }, 3000); // Adjust the interval duration as desired (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h2 className="add-item-header">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`animate-float${animationTrigger ? ' animate' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </h2>
  );
};

export default CustomAnimatedLabel;
