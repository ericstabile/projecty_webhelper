import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <header className={`header ${showAnimation ? 'animate-pop' : ''}`}>
      <h1 className="project-y glow">Project Y</h1>
    </header>
  );
};

export default HomePage;
