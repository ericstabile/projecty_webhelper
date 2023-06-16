import React, { useState, useEffect } from "react";
import InventoryActionComponent from "./InventoryActionComponent";

const BaseInventoryComponent = ({
  invIndex,
  inventoryObject,
  actionChange,
  modifierChange,
  setInventoryData
}) => {
  const [currentInventoryObject, setCurrentInventoryObject] =
    useState(inventoryObject);
  const [idx, setIdx] = useState(invIndex);

  const handleActionChange = (e) => {
    actionChange(idx, e);
  };

  const handleModifierChange = (actIndex, modIndex, e) => {
    modifierChange(idx, actIndex, modIndex, e);
  };

  const handleStackChange = (e) => {
    setInventoryData((prevInventoryData) =>
      prevInventoryData.map((item, index) =>
        index === idx ? { ...item, IsStackable: e.target.checked } : item
      )
    );
  };

  const handleIndividualSpriteChange = (e) => {
    setInventoryData((prevInventoryData) =>
      prevInventoryData.map((item, index) =>
        index === idx
          ? { ...item, IsIndividualSprite: e.target.checked }
          : item
      )
    );
  };

  useEffect(() => {
    setCurrentInventoryObject(inventoryObject);
  }, [inventoryObject]);

  return (
    <div key={idx}>
      <h3>Inventory Item {idx + 1}</h3>
      <label>
        Name:
        <input
          type="text"
          name="Name"
          value={currentInventoryObject.Name}
          onChange={(e) => handleActionChange(e)}
        />
      </label>
      <label>
        Icon Path:
        <input
          type="text"
          name="IconPath"
          value={currentInventoryObject.IconPath}
          onChange={(e) => handleActionChange(e)}
        />
      </label>
      <label>
        Is Stackable:
        <input
          type="checkbox"
          name="IsStackable"
          checked={currentInventoryObject.IsStackable}
          onChange={(e) => handleStackChange(e)}
        />
      </label>
      <label>
        Max Stack:
        <input
          type="text"
          name="MaxStack"
          value={currentInventoryObject.MaxStack}
          onChange={(e) => handleActionChange(e)}
        />
      </label>
      <label>
        Is Individual Sprite:
        <input
          type="checkbox"
          name="IsIndividualSprite"
          checked={currentInventoryObject.IsIndividualSprite}
          onChange={(e) => handleIndividualSpriteChange(e)}
        />
      </label>
      <label>
        X:
        <input
          type="text"
          name="X"
          value={currentInventoryObject.X}
          onChange={(e) => handleActionChange(e)}
        />
      </label>
      <label>
        Y:
        <input
          type="text"
          name="Y"
          value={currentInventoryObject.Y}
          onChange={(e) => handleActionChange(e)}
        />
      </label>
      <h3>Actions</h3>
      {currentInventoryObject.Actions.map((action, actIndex) => (
        <InventoryActionComponent key={actIndex} action={action} />
      ))}
    </div>
  );
};

export default BaseInventoryComponent;
