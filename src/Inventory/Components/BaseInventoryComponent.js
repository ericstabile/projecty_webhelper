import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import InventoryActionComponent from "./InventoryActionComponent";
import {
  ReadOnlyTextField,
  ReadOnlyFormCheckField,
} from "../../GlobalComponents/ReadOnlyFormGroupFields/ReadOnlyFormGroupFieldsComponent";

const BaseInventoryComponent = ({
  invIndex,
  inventoryObject,
  actionChange,
  modifierChange,
  setInventoryData,
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
        index === idx ? { ...item, IsIndividualSprite: e.target.checked } : item
      )
    );
  };

  useEffect(() => {
    setCurrentInventoryObject(inventoryObject);
  }, [inventoryObject]);

  return (
    <div key={idx} className="inventory-inventory-component-container sketchy">
      <h3>
        {currentInventoryObject.Name} (ID: {currentInventoryObject.ID})
      </h3>
      <Form>
        <ReadOnlyTextField
          controlId={`iconpath_${idx}`}
          label="Icon Path"
          value={currentInventoryObject.IconPath}
        />
        <ReadOnlyFormCheckField
          controlId={`isstackable_${idx}`}
          label="Is Stackable"
          value={currentInventoryObject.IsStackable}
        />
        <ReadOnlyTextField
          controlId={`maxstack_${idx}`}
          label="Max Stack"
          value={currentInventoryObject.MaxStack}
        />
        <ReadOnlyFormCheckField
          controlId={`isindividual_${idx}`}
          label="Is Individual Sprite"
          value={currentInventoryObject.IsIndividualSprite}
        />
        <ReadOnlyTextField
          controlId={`x_${idx}`}
          label="X"
          value={currentInventoryObject.X}
        />
        <ReadOnlyTextField
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
  );
};

export default BaseInventoryComponent;
