import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import BaseInventoryComponent from "./BaseInventoryComponent";

const InventoryDataComponent = () => {
  const { inventoryObjectData, setInventoryObjectData } =
    useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 2;
  const numberOfPages = Math.ceil(inventoryObjectData.length / itemsPerPage);

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
                invIndex={invIndex + currentPage * itemsPerPage}
                inventoryObject={inventoryItem}
                actionChange={handleActionChange}
                modifierChange={handleModifierChange}
                setInventoryData={setInventoryObjectData}
                isDefault={false}
              />
            ))}
          {currentPage === numberOfPages - 1 && (
            <BaseInventoryComponent
              invIndex={inventoryObjectData.length}
              isDefault={true}
            />
          )}
        </div>
      </form>
      <div className="inventory-inventory-nav-buttons">
        <button
          className="inventory-inventory-previous-button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="inventory-inventory-next-button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === numberOfPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <div>Inventory data not loaded</div>
  );
};

export default InventoryDataComponent;
