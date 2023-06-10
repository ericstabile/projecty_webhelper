import React, { useContext } from "react";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";

const InventoryDataComponent = () => {
  const { inventoryData, setInventoryData } = useContext(AppContext);

  const handleInventoryChange = (inventoryIndex, event) => {
    const { name, value } = event.target;
    let newInventoryData = [...inventoryData];
    if (event.target.type === "checkbox") {
      newInventoryData[inventoryIndex][name] = event.target.checked;
    } else {
      newInventoryData[inventoryIndex][name] = value;
    }
    setInventoryData(newInventoryData);
  };

  const handleActionChange = (inventoryIndex, actionIndex, event) => {
    const { name, value } = event.target;
    let newInventoryData = [...inventoryData];
    newInventoryData[inventoryIndex].Actions[actionIndex][name] = value;
    setInventoryData(newInventoryData);
  };

  const handleModifierChange = (
    inventoryIndex,
    actionIndex,
    modifierIndex,
    event
  ) => {
    const { name, value } = event.target;
    let newInventoryData = [...inventoryData];
    newInventoryData[inventoryIndex].Actions[actionIndex].ModifierOverrides[
      modifierIndex
    ][name] = value;
    setInventoryData(newInventoryData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inventoryData);
  };

  return inventoryData && inventoryData.length > 0 ? (
    <form onSubmit={handleSubmit}>
      {inventoryData.map((inventoryItem, invIndex) => (
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
      ))}
      <input type="submit" value="Submit" />
    </form>
  ) : (
    <div>Inventory data not loaded</div>
  );
};

export default InventoryDataComponent;
