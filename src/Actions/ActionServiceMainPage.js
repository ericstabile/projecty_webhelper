import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ActionServiceMainPage.css";
import TopRowComponent from "../GlobalComponents/TopRow/TopRowComponent";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import { AppContext } from "../GlobalComponents/Contexts/AppContext";
import { ActionContext } from "../GlobalComponents/Contexts/ActionContext";
import ActionDataComponent from "./Components/ActionDataComponent";
import AddEditAction from "./Components/AddEditAction";
import ModalComponent from "../GlobalComponents/ModalComponent/ModalComponent";

const ActionServiceMainPage = () => {
  const navigate = useNavigate();
  const [isAddingAction, setIsAddingAction] = useState(false);
  const { actionData, setActionData } = useContext(AppContext);
  const { lastID, setLastID } = useContext(ActionContext);

  const handleFileChosen = (content) => {
    setActionData(content);
  };

  const handleAddNewAction = (action) => {
    setActionData([...actionData, action]);
    setLastID(lastID + 1);
    setIsAddingAction(false);
  };

  const handleOpenAddModal = () => {
    setIsAddingAction(true);
  };

  const handleResetState = () => {
    setActionData([]);
    setLastID(0);
  };

  const handleSaveToFile = () => {
    const jsonStr = JSON.stringify(actionData, null, 2);
    const blob = new Blob([jsonStr], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "action_data_v0.json");
  };

  useEffect(() => {
    setLastID(actionData.length);
  }, [actionData]);

  return (
    <div className="action-service-main-container">
      <TopRowComponent
        handleAddNewItem={handleOpenAddModal}
        handleResetState={handleResetState}
        handleSaveFile={handleSaveToFile}
        nav={navigate}
      />
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      <ActionDataComponent
        actionData={actionData || []}
        setActionData={setActionData}
      />

      {isAddingAction && (
        <ModalComponent
          isOpen={true}
          onClose={() => setIsAddingAction(false)}
        >
          <AddEditAction
            id={lastID}
            isEdit={false}
            onSave={handleAddNewAction}
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default ActionServiceMainPage;
