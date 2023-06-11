import React, { useState } from "react";

const BaseInventoryComponent = ({ inventoryObject }) => {
  const [currentInventoryObject, setCurrentInventoryObject] =
    useState(inventoryObject);

  return (
    <div key={invIndex}>
      <h3>Inventory Item {invIndex + 1}</h3>
      <label>
        Name:
        <input
          type="text"
          name="Name"
          value={inventoryItem.Name}
          onChange={(e) => handleActionChange(invIndex, e)}
        />
      </label>
      <label>
        Icon Path:
        <input
          type="text"
          name="IconPath"
          value={inventoryItem.IconPath}
          onChange={(e) => handleActionChange(invIndex, e)}
        />
      </label>
      <label>
        Is Stackable:
        <input
          type="checkbox"
          name="IsStackable"
          checked={inventoryItem.IsStackable}
          onChange={(e) =>
            setInventoryData((prevInventoryData) =>
              prevInventoryData.map((item, index) =>
                index === invIndex
                  ? { ...item, IsStackable: e.target.checked }
                  : item
              )
            )
          }
        />
      </label>
      <label>
        Max Stack:
        <input
          type="text"
          name="MaxStack"
          value={inventoryItem.MaxStack}
          onChange={(e) => handleActionChange(invIndex, e)}
        />
      </label>
      <label>
        Is Individual Sprite:
        <input
          type="checkbox"
          name="IsIndividualSprite"
          checked={inventoryItem.IsIndividualSprite}
          onChange={(e) =>
            setInventoryData((prevInventoryData) =>
              prevInventoryData.map((item, index) =>
                index === invIndex
                  ? { ...item, IsIndividualSprite: e.target.checked }
                  : item
              )
            )
          }
        />
      </label>
      <label>
        X:
        <input
          type="text"
          name="X"
          value={inventoryItem.X}
          onChange={(e) => handleActionChange(invIndex, e)}
        />
      </label>
      <label>
        Y:
        <input
          type="text"
          name="Y"
          value={inventoryItem.Y}
          onChange={(e) => handleActionChange(invIndex, e)}
        />
      </label>
      <h3>Actions</h3>
      {inventoryItem.Actions.map((action, actIndex) => (
        <div key={actIndex}>
          <h4>Action {actIndex + 1}</h4>
          <label>
            ID:
            <input
              type="text"
              name="ID"
              value={action.ID}
              onChange={(e) => handleActionChange(invIndex, actIndex, e)}
            />
          </label>
          <h4>Modifier Overrides</h4>
          {action.ModifierOverrides.map((modifier, modIndex) => (
            <div key={modIndex}>
              <label>
                ModifierID:
                <input
                  type="text"
                  name="ModifierID"
                  value={modifier.ModifierID}
                  onChange={(e) =>
                    handleModifierChange(invIndex, actIndex, modIndex, e)
                  }
                />
              </label>
              <label>
                OverrideValue:
                <input
                  type="text"
                  name="OverrideValue"
                  value={modifier.OverrideValue}
                  onChange={(e) =>
                    handleModifierChange(invIndex, actIndex, modIndex, e)
                  }
                />
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BaseInventoryComponent;
