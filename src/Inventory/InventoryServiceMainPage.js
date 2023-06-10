import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ActionServiceMainPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopRowComponent from "../GlobalComponents/TopRow/TopRowComponent";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import { AppContext } from "../GlobalComponents/Contexts/AppContext";
import { InventoryContext } from "../GlobalComponents/Contexts/InventoryContext";
import ModalComponent from "../GlobalComponents/ModalComponent/ModalComponent";

const InventoryServiceMainPage = () => {
  const navigate = useNavigate();

  const { actionData, modifierData, inventoryData, setInventoryData } =
    useContext(AppContext);
  const { lastID, setLastID } = useContext(InventoryContext);

  const isEmpty = (data) =>
    data === null || data === undefined || data.length === 0;

  const createToastMessage = (modifierData, actionData) => {
    let toastMessage = "";
    if (isEmpty(modifierData)) {
      toastMessage += "Modifier Data is missing\n";
    }
    if (isEmpty(actionData)) {
      toastMessage += "Action Data is missing\n";
    }
    return toastMessage;
  };

  useEffect(() => {
    const toastMessage = createToastMessage(modifierData, actionData);

    if (toastMessage !== "") {
      toast.error(toastMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
