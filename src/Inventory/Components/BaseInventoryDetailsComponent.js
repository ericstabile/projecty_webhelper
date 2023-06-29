import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {
  RO_MultiLine,
  RO_SingleLine,
  RO_Boolean,
} from "../CustomFields/InventoryCustomFields";

const BaseInventoryDetailsComponent = ({ index, inventoryObj }) => {
  const [idx, setIdx] = useState(index);
  const [currentInventoryObject, setCurrentInventoryObject] =
    useState(inventoryObj);

  useEffect(() => {
    setIdx(index);
  }, [index]);

  useEffect(() => {
    setCurrentInventoryObject(inventoryObj);
  }, [inventoryObj]);

  return (
    currentInventoryObject && (
      <div className="inventory-inventory-component-details-form">
        <Form>
          <RO_MultiLine
            controlId={`iconpath_${idx}`}
            label="Icon Path"
            value={currentInventoryObject.IconPath}
          />
          <RO_Boolean
            controlId={`isstackable_${idx}`}
            label="Is Stackable"
            value={currentInventoryObject.IsStackable}
          />
          <RO_SingleLine
            controlId={`maxstack_${idx}`}
            label="Max Stack"
            value={currentInventoryObject.MaxStack}
          />
          <RO_Boolean
            controlId={`isindividual_${idx}`}
            label="Is Individual Sprite"
            value={currentInventoryObject.IsIndividualSprite}
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
      </div>
    )
  );
};

export default BaseInventoryDetailsComponent;
