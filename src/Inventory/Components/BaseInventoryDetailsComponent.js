import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {
  RO_MultiLine,
  RO_SingleLine,
  RO_Boolean,
  Edit_MultiLine,
  Edit_SingleLine,
  Edit_Boolean,
} from "../CustomFields/InventoryCustomFields";
import { FiSave } from "react-icons/fi";

const BaseInventoryDetailsComponent = ({
  index,
  editState,
  inventoryObj,
  saveChanges,
}) => {
  const [idx, setIdx] = useState(index);
  const [currentInventoryObject, setCurrentInventoryObject] =
    useState(inventoryObj);
  const [isEditing, setIsEditing] = useState(editState);

  const handleNameEdit = (e) => {
    setCurrentInventoryObject((prevState) => ({
      ...prevState,
      Name: e,
    }));
  };

  const handleIconPathEdit = (e) => {
    setCurrentInventoryObject((prevState) => ({
      ...prevState,
      IconPath: e,
    }));
  };

  const handleIsStackableEdit = (e) => {
    setCurrentInventoryObject((prevState) => ({
      ...prevState,
      IsStackable: e,
    }));
  };

  const handleMaxStackEdit = (e) => {
    setCurrentInventoryObject((prevState) => ({
      ...prevState,
      MaxStack: e,
    }));
  };

  const handleIsIndividualSpriteEdit = (e) => {
    setCurrentInventoryObject((prevState) => ({
      ...prevState,
      IsIndividualSprite: e,
    }));
  };

  const handleXEdit = (e) => {
    setCurrentInventoryObject((prevState) => ({
      ...prevState,
      X: e,
    }));
  };

  const handleYEdit = (e) => {
    setCurrentInventoryObject((prevState) => ({
      ...prevState,
      Y: e,
    }));
  };

  const saveChangesHandler = () => {
    saveChanges(currentInventoryObject);
  };

  useEffect(() => {
    setIdx(index);
  }, [index]);

  useEffect(() => {
    setCurrentInventoryObject(inventoryObj);
  }, [inventoryObj]);

  useEffect(() => {
    setIsEditing(editState);
  }, [editState]);

  return (
    currentInventoryObject && (
      <div className="inventory-inventory-component-details-form">
        {isEditing && (
          <>
            <div className="inventory-inventory-component-header-container">
              <div className="inventory-inventory-component-text-container">
                <h3>
                  <Form.Control
                    type="text"
                    className="inventory-inventory-component-name"
                    placeholder="Enter Name"
                    value={currentInventoryObject.Name}
                    onChange={handleNameEdit}
                  />{" "}
                  (ID: {idx})
                </h3>
              </div>
              <button
                className="edit-button"
                onClick={() => saveChangesHandler()}
              >
                <FiSave />
              </button>
            </div>
            <Form>
              <Edit_MultiLine
                controlId={`edit_iconpath_${idx}`}
                label="Icon Path"
                value={currentInventoryObject.IconPath}
                onChange={handleIconPathEdit}
              />
              <Edit_Boolean
                controlId={`edit_isstackable_${idx}`}
                label="Is Stackable"
                value={currentInventoryObject.IsStackable}
                onChange={handleIsStackableEdit}
              />
              <Edit_SingleLine
                controlId={`edit_maxstack_${idx}`}
                label="Max Stack"
                value={currentInventoryObject.MaxStack}
                onChange={handleMaxStackEdit}
              />
              <Edit_Boolean
                controlId={`edit_isindividual_${idx}`}
                label="Is Individual Sprite"
                value={currentInventoryObject.IsIndividualSprite}
                onChange={handleIsIndividualSpriteEdit}
              />
              <Edit_SingleLine
                controlId={`edit_x_${idx}`}
                label="X"
                value={currentInventoryObject.X}
                onChange={handleXEdit}
              />
              <Edit_SingleLine
                controLId={`edit_y_${idx}`}
                label="Y"
                value={currentInventoryObject.Y}
                onChange={handleYEdit}
              />
            </Form>
          </>
        )}

        {!isEditing && (
          <>
            <h3>
              {currentInventoryObject.Name} (ID: {currentInventoryObject.ID})
            </h3>
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
          </>
        )}
      </div>
    )
  );
};

export default BaseInventoryDetailsComponent;
