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

const InventoryServiceMainPage = () => {
  const navigate = useNavigate();
  const [isAddingObject, setIsAddingObject] = useState(false);
  const { actionData, modifierData, inventoryData, setInventoryData } =
    useContext(AppContext);
  const { lastID, setLastID } = useContext(InventoryContext);

  const isEmpty = (data) =>
    data === null || data === undefined || data.length === 0;

  const handleAddNewItem = (inventoryObject) => {
    setInventoryData([...inventoryData, inventoryObject]);
    setLastID(lastID + 1);
    setIsAddingObject(false);
  };

  const handleResetState = () => {
    setInventoryData([]);
    setLastID(0);
  };

  const handleSaveFile = () => {
    const jsonStr = JSON.stringify(inventoryData, null, 2);
    const blob = new Blob([jsonStr], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "inventory_object_data_v0.json");
  };

  const handleFileChosen = () => {};

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
    setLastID(inventoryData.length);
  }, [inventoryData])

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
    </div>
  );
};

export default InventoryServiceMainPage;
