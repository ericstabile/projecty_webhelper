import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import BaseInventoryComponent from "./BaseInventoryComponent";
import InventoryNavButtonsComponent from "./InventoryNavButtonsComponent";

const InventoryDataComponent = () => {
  const { inventoryObjectData, setInventoryObjectData } =
    useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 2;
  const numberOfPages = Math.ceil(inventoryObjectData.length / itemsPerPage);

  const handleAddNewInventoryObject = (o) => {

  };

  const updateExistingInventoryObject = (o) => {

  };

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

  const inventoryPageRef = useRef();

  useEffect(() => {
    if (inventoryPageRef.current) {
      inventoryPageRef.current.style.animation = "none";
      void inventoryPageRef.current.offsetWidth;
      inventoryPageRef.current.style.animation = "";
    }
  }, [currentPage]);

  return inventoryObjectData && inventoryObjectData.length > 0 ? (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inventory-inventory-page" ref={inventoryPageRef}>
          {inventoryObjectData
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((inventoryItem, invIndex) => (
              <BaseInventoryComponent
                invIndex={inventoryItem.ID}
                inventoryObject={inventoryItem}
                actionChange={handleActionChange}
                modifierChange={handleModifierChange}
                setInventoryData={setInventoryObjectData}
                isDefault={inventoryItem.Name === "_default_"}
              />
            ))}
        </div>
      </form>
      <InventoryNavButtonsComponent
        page={currentPage}
        pageCount={numberOfPages}
        setPageHandler={setCurrentPage}
      />
    </div>
  ) : (
    <div>Inventory data not loaded</div>
  );
};

export default InventoryDataComponent;
