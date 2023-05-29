import React, { useState, useEffect } from "react";
import { AppContext } from "../Contexts/AppContext";

export const AppProvider = ({ children }) => {
  const [modifierData, setModifierData] = useState([]);
  const [actionData, setActionData] = useState([]);
  const [inventoryObjectData, setInventoryObjectData] = useState([]);
  const [assetPathList, setAssetPathList] = useState([]);

  const loadAssetPath = () => {
    const assetStrings = [
      "res://Assets/PNG/LargeSpriteSheets/ultimate_classic_32.png",
      "res://Assets/PNG/LargeSpriteSheets/ultimate_classic_dark_32.png",
      "res://Assets/PNG/LargeSpriteSheets/ultimate_classic_light_32.png",
    ];

    const newAssetPathList = [...assetPathList];

    assetStrings.forEach((string) => {
      newAssetPathList.push(string);
    });

    setAssetPathList(newAssetPathList);
  };

  useEffect(() => {
    loadAssetPath();
  }, []);

  const value = {
    modifierData,
    setModifierData,
    actionData,
    setActionData,
    inventoryObjectData,
    setInventoryObjectData,
    assetPathList,
    setAssetPathList,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
