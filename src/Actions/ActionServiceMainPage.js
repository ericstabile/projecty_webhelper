import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ActionServiceMainPage.css";
import TopRowComponent from "../GlobalComponents/TopRow/TopRowComponent";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import { AppContext } from "../GlobalComponents/Contexts/AppContext";
import { ActionContext } from "../GlobalComponents/Contexts/ActionContext";
import ActionDataComponent from "./ActionDataComponent/ActionDataComponent";

const ActionServiceMainPage = () => {
  const navigate = useNavigate();
  const { actionData, setActionData } = useContext(AppContext);
  const { lastID, setLastID } = useContext(ActionContext);
  
  const handleFileChosen = (content) => {
    setActionData(content);
  };

  const handleAddNewAction = () => {
    navigate("/addNewAction");
  };

  const handleResetState = () => {
    setActionData([]);
    setLastID(0);
  };

  const handleSaveToFile = () => {
    const jsonStr = JSON.stringify(actionData, null, 2);
    const blob = new Blob([jsonStr], { type: "text/plain;charset=utf-8"});
    saveAs(blob, "action_data_v0.json");
  }

  return (
    <div className="action-service-main-container">
      <TopRowComponent
        handleAddNewItem={handleAddNewAction}
        handleResetState={handleResetState}
        handleSaveFile={handleSaveToFile}
        nav={navigate}
      />
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      <ActionDataComponent 
        actionData={actionData || []}
        setActionData={setActionData} />
    </div>
  );
};

export default ActionServiceMainPage;