import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/InventoryServiceMainPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopRowComponent from "../GlobalComponents/TopRow/TopRowComponent";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import { AppContext } from "../GlobalComponents/Contexts/AppContext";
import { InventoryContext } from "../GlobalComponents/Contexts/InventoryContext";
import ModalComponent from "../GlobalComponents/ModalComponent/ModalComponent";
import InventoryDataComponent from "./Components/InventoryDataComponent";

const InventoryServiceMainPage = () => {
  const navigate = useNavigate();
  const [isAddingObject, setIsAddingObject] = useState(false);
  const { actionData, modifierData, inventoryObjectData, setInventoryObjectData } =
    useContext(AppContext);
  const { lastID, setLastID } = useContext(InventoryContext);

  const isEmpty = (data) =>
    (data === null || data === undefined) || data.length === 0;

  const handleAddNewItem = (inventoryObject) => {
    setInventoryObjectData([...inventoryObjectData, inventoryObject]);
    setLastID(lastID + 1);
    setIsAddingObject(false);
  };

  const handleResetState = () => {
    setInventoryObjectData([]);
    setLastID(0);
  };

  const handleSaveFile = () => {
    const jsonStr = JSON.stringify(inventoryObjectData, null, 2);
    const blob = new Blob([jsonStr], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "inventory_object_data_v0.json");
  };

  const handleFileChosen = (content) => {
    setInventoryObjectData(content);
  };

  const createToastMessage = (data, dataType) => {
    if (isEmpty(data)) {
      toast.error(`${dataType} Data is missing`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    if (inventoryObjectData !== null && inventoryObjectData !== undefined) {
      setLastID(inventoryObjectData.length);
    } else {
      setLastID(0);
    }
  }, [inventoryObjectData])

  useEffect(() => {
    createToastMessage(modifierData, "Modifier");
    createToastMessage(actionData, "Action");
  }, []);

  return (
    <div className="inventory-service-main-container">
      <TopRowComponent
        handleAddNewItem={handleAddNewItem}
        handleResetState={handleResetState}
        handleSaveFile={handleSaveFile}
        nav={navigate}
      />
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      <InventoryDataComponent />
    </div>
  );
};

export default InventoryServiceMainPage;
