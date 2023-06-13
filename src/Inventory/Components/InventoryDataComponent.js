import React, { useContext } from "react";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import BaseInventoryComponent from "./BaseInventoryComponent";

const InventoryDataComponent = () => {
  const { inventoryObjectData, setInventoryObjectData } = useContext(AppContext);

  const handleInventoryChange = (inventoryIndex, event) => {
    const { name, value } = event.target;
    let newInventoryData = [...inventoryObjectData];
    if (event.target.type === "checkbox") {
      newInventoryData[inventoryIndex][name] = event.target.checked;
    } else {
      newInventoryData[inventoryIndex][name] = value;
    }
    setInventoryObjectData(newInventoryData);
  };

  const handleActionChange = (inventoryIndex, actionIndex, event) => {
    const { name, value } = event.target;
    let newInventoryData = [...inventoryObjectData];
    newInventoryData[inventoryIndex].Actions[actionIndex][name] = value;
    setInventoryObjectData(newInventoryData);
  };

  const handleModifierChange = (
    inventoryIndex,
    actionIndex,
    modifierIndex,
    event
  ) => {
    const { name, value } = event.target;
    let newInventoryData = [...inventoryObjectData];
    newInventoryData[inventoryIndex].Actions[actionIndex].ModifierOverrides[
      modifierIndex
    ][name] = value;
    setInventoryObjectData(newInventoryData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inventoryObjectData);
  };

  return inventoryObjectData && inventoryObjectData.length > 0 ? (
    <form onSubmit={handleSubmit}>
      {inventoryObjectData.map((inventoryItem, invIndex) => (
        <BaseInventoryComponent
          invIndex={invIndex}
          inventoryObject={inventoryItem}
          actionChange={handleActionChange}
          modifierChange={handleModifierChange}
          setInventoryData={setInventoryObjectData}
        />
      ))}
      <input type="submit" value="Submit" />
    </form>
  ) : (
    <div>Inventory data not loaded</div>
  );
};

export default InventoryDataComponent;
