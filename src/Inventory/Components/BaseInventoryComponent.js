import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import InventoryActionComponent from "./InventoryActionComponent";
import BaseInventoryDetailsComponent from "./BaseInventoryDetailsComponent";

const defaultInventoryObject = {
  ID: -1,
  Name: "_default_",
  IconPath: "res://",
  IsStackable: false,
  MaxStack: "1",
  IsIndividualSprite: false,
  X: "1",
  Y: "1",
  Actions: [],
};

const BaseInventoryComponent = ({
  invIndex,
  inventoryObject,
  actionChange,
  modifierChange,
  setInventoryData,
  isDefault,
}) => {
  const [currentInventoryObject, setCurrentInventoryObject] =
    useState(inventoryObject);
  const [idx, setIdx] = useState(invIndex);
  const [isDefaultComponent, setIsDefaultComponent] = useState(isDefault);
  const [isAddingComponent, setIsAddingComponent] = useState(false);

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
        index === idx ? { ...item, IsIndividualSprite: e.target.checked } : item
      )
    );
  };

  const handleAddNewInventoryObject = () => {
    setIsAddingComponent(!isAddingComponent);
  };

  const saveNewInventoryObjectHandler = (obj) => {
    setInventoryData((prevInventoryData) =>
      prevInventoryData.map((item, index) =>
        item.ID === obj.ID
          ? {
              ...item,
              Name: obj.Name,
              IconPath: obj.IconPath,
              IsStackable: obj.IsStackable,
              MaxStack: obj.MaxStack,
              IsIndividualSprite: obj.IsIndividualSprite,
              X: obj.X,
              Y: obj.Y,
            }
          : item
      )
    );

    const newID = 1;
    const defaultObjectCopy = {...defaultInventoryObject, ID: newID};
  };

  const updateExistingInventoryObjectHandler = (obj) => {
    console.log(
      "object from base inventory component updateExistingInventoryObjectHandler",
      obj
    );
  };

  useEffect(() => {
    setCurrentInventoryObject(inventoryObject);

    if (isDefault) {
      setIdx(inventoryObject.ID);
    }
  }, [inventoryObject]);

  useEffect(() => {
    setIsDefaultComponent(isDefault);
  }, [isDefault]);

  return (
    <div key={idx} className="inventory-inventory-component-container sketchy">
      {isDefaultComponent && !isAddingComponent && (
        <div className="inventory-inventory-default">
          <span>
            <b>Add New Inventory Object</b>
          </span>
          <Button
            className="inventory-inventory-default-button"
            variant="success"
            onClick={handleAddNewInventoryObject}
            enabled="true"
          >
            +
          </Button>
        </div>
      )}

      {isDefaultComponent && isAddingComponent && (
        <div>
          <BaseInventoryDetailsComponent
            index={idx}
            editState={isAddingComponent}
            inventoryObj={currentInventoryObject}
            saveChanges={saveNewInventoryObjectHandler}
          />
        </div>
      )}

      {!isDefaultComponent && (
        <div>
          <BaseInventoryDetailsComponent
            index={idx}
            editState={false}
            inventoryObj={currentInventoryObject}
            saveChanges={updateExistingInventoryObjectHandler}
          />
          <h3>Actions</h3>
          {currentInventoryObject.Actions.map((action, actIndex) => (
            <InventoryActionComponent key={actIndex} action={action} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BaseInventoryComponent;
