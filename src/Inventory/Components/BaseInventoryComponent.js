import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import InventoryActionComponent from "./InventoryActionComponent";
import {
  RO_MultiLine,
  RO_SingleLine,
} from "../CustomFields/InventoryCustomFields";

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

  useEffect(() => {
    setCurrentInventoryObject(inventoryObject);
  }, [inventoryObject]);

  useEffect(() => {
    setIsDefaultComponent(isDefault);
  }, [isDefault]);

  useEffect(() => {
    console.log("isDefaultComponent", isDefaultComponent);
  }, []);

  return (
    <div key={idx} className="inventory-inventory-component-container sketchy">
      {isDefaultComponent && (
        <div className="inventory-inventory-default">
          <span>
            <b>Add New Inventory Object</b>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button
            className="inventory-inventory-default-button"
            variant="success"
          >
            +
          </Button>
        </div>
      )}

      {!isDefaultComponent && (
        <div>
          <h3>
            {currentInventoryObject.Name} (ID: {currentInventoryObject.ID})
          </h3>
          <Form>
            <RO_MultiLine
              controlId={`iconpath_${idx}`}
              label="Icon Path"
              value={currentInventoryObject.IconPath}
            />
            <RO_SingleLine
              controlId={`isstackable_${idx}`}
              label="Is Stackable"
              value={currentInventoryObject.IsStackable ? "Yes" : "No"}
            />
            <RO_SingleLine
              controlId={`maxstack_${idx}`}
              label="Max Stack"
              value={currentInventoryObject.MaxStack}
            />
            <RO_SingleLine
              controlId={`isindividual_${idx}`}
              label="Is Individual Sprite"
              value={currentInventoryObject.IsIndividualSprite ? "Yes" : "No"}
            />
            <RO_SingleLine
              controlId={`x_${idx}`}
              label="X"
              value={currentInventoryObject.X}
            />
            <RO_SingleLine
              controLId={`y_${idx}`}
              label="Y"
              value={currentInventoryObject.Y}
            />
          </Form>
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
