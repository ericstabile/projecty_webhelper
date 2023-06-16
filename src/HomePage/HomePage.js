import React, { useEffect, useState, useContext } from "react";
import "./HomePage.css";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import CustomAnimatedLabel from "../GlobalComponents/CustomAnimatedLabel/CustomAnimatedLabel";
import { AppContext } from "../GlobalComponents/Contexts/AppContext";

const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const {
    modifierData,
    actionData,
    inventoryObjectData,
    setModifierData,
    setActionData,
    setInventoryObjectData,
  } = useContext(AppContext);

  const handleModifierFileChosen = (content) => {
    setModifierData(content);
  };

  const handleActionFileChosen = (content) => {
    setActionData(content);
  };

  const handleInventoryFileChosen = (content) => {
    setInventoryObjectData(content);
  };

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="home-page-container">
      <header className={`header ${showAnimation ? "animate-pop" : ""}`}>
        <h1 className="project-y glow">Project Y</h1>
      </header>
      <div className="home-load-json-components">
        {modifierData.length < 1 && (
          <LoadJsonComponent
            handleFileChosen={handleModifierFileChosen}
            typeOfFile={"Modifier"}
          />
        )}
        {modifierData.length > 0 && (
          <div className="home-json-file-loaded-container">
            <CustomAnimatedLabel text="Modifier File Loaded" />
          </div>
        )}

        {actionData.length < 1 && (
          <LoadJsonComponent
            handleFileChosen={handleActionFileChosen}
            typeOfFile={"Action"}
          />
        )}
        {actionData.length > 0 && (
          <div className="home-json-file-loaded-container">
            <CustomAnimatedLabel text="Action File Loaded" />
          </div>
        )}

        {inventoryObjectData.length < 1 && (
          <LoadJsonComponent
            handleFileChosen={handleInventoryFileChosen}
            typeOfFile={"Inventory"}
          />
        )}
        {inventoryObjectData.length > 0 && (
          <div className="home-json-file-loaded-container">
            <CustomAnimatedLabel text="Inventory Object File Loaded" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
