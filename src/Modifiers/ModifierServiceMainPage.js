import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import "bootstrap/dist/css/bootstrap.min.css";
import TopRowComponent from "../GlobalComponents/TopRow/TopRowComponent";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import "./ModifierServiceMainPage.css";
import { AppContext } from "../GlobalComponents/Contexts/AppContext";
import ModifierTableComponent from "./ModifierTableComponent/ModifierTableComponent";

const ModifierServiceMainPage = () => {
  const [lastID, setLastID] = useState(0);
  const navigate = useNavigate();

  const { modifierData, setModifierData } = useContext(AppContext);

  const handleFileChosen = (content) => {
    setModifierData(content);
  };

  const handleAddNewItem = () => {
    navigate("/addNewModifier");
    const newID =
      modifierData.length > 0
        ? Math.max(...modifierData.map((obj) => obj.ID))
        : 0;

    setLastID(newID);
  };

  const handleResetState = () => {
    setModifierData([]);
    setLastID(0);
  };

  const handleSaveToFile = () => {
    const jsonStr = JSON.stringify(modifierData, null, 2);
    const blob = new Blob([jsonStr], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "modifier_data_v0.json");
  };

  return (
    <div className="main-container">
      <TopRowComponent
        handleAddNewItem={handleAddNewItem}
        handleResetState={handleResetState}
        handleSaveFile={handleSaveToFile}
        nav={navigate}
      />
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      <ModifierTableComponent
        modifierData={modifierData || []}
        setModifierData={setModifierData}
      />
    </div>
  );
};

export default ModifierServiceMainPage;
