import React, { useEffect, useState, useContext } from 'react';
import './HomePage.css';
import LoadJsonComponent from '../GlobalComponents/LoadJsonComponent/LoadJsonComponent';
import { AppContext } from '../GlobalComponents/Contexts/AppContext';

const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const {
    setModifierData,
    setActionData,
    setInventoryObjectData
  } = useContext(AppContext);

  const handleModifierFileChosen = (content) => {
    setModifierData(content);
  }

  const handleActionFileChosen = (content) => {
    setActionData(content);
  }

  const handleInventoryFileChosen = (content) => {
    setInventoryObjectData(content);
  }

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="home-page-container">
      <header className={`header ${showAnimation ? 'animate-pop' : ''}`}>
        <h1 className="project-y glow">Project Y</h1>
      </header>
      <div className="home-load-json-components">
        <LoadJsonComponent handleFileChosen={handleModifierFileChosen} typeOfFile={"Modifier"} />
        <LoadJsonComponent handleFileChosen={handleActionFileChosen} typeOfFile={"Action"}/>
        <LoadJsonComponent handleFileChosen={handleInventoryFileChosen} typeOfFile={"Inventory"}/>
      </div>
    </div>
  );
};

export default HomePage;
