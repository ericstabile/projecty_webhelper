import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import "bootstrap/dist/css/bootstrap.min.css";
import TopRowComponent from "../GlobalComponents/TopRow/TopRowComponent";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import "./Styles/ModifierServiceMainPage.css";
import { AppContext } from "../GlobalComponents/Contexts/AppContext";
import ModifierTable from "./Components/ModifierTable";
import { ModifierContext } from "../GlobalComponents/Contexts/ModifierContext";
import AddModifierModal from "./Modals/AddModifierModal";
import EditModifierModal from "./Modals/EditModifierModal";

const ModifierServiceMainPage = () => {
  const navigate = useNavigate();
  const [isAddingModifier, setIsAddingModifier] = useState(false);
  const [modifierToEdit, setModifierToEdit] = useState([]);

  const { modifierData, setModifierData } = useContext(AppContext);
  const { lastID, setLastID } = useContext(ModifierContext);

  const handleFileChosen = (content) => {
    setModifierData(content);
  };

  const displayModal = () => {
    setIsAddingModifier(true);
  };

  const handleAddNewItem = (newModifier) => {
    setModifierData([...modifierData, newModifier]);
    setIsAddingModifier(false);
  };

  const handleEditModifier = (editedModifier) => {
    if (editedModifier !== null) {
      const updatedModifierData = modifierData.map((modifier) =>
        modifier.ID === editedModifier.ID ? editedModifier : modifier
      );

      setModifierData(updatedModifierData);
    }

    setModifierToEdit(null);
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

  useEffect(() => {
    setModifierToEdit(null);
  }, []);

  useEffect(() => {
    if (modifierData) {
      setLastID(modifierData.length);
    } else {
      setLastID(0);
    }
  }, [modifierData]);

  return (
    <div className="modifier-main-container">
      <TopRowComponent
        handleAddNewItem={displayModal}
        handleResetState={handleResetState}
        handleSaveFile={handleSaveToFile}
        nav={navigate}
      />
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      <ModifierTable
        modifierData={modifierData || []}
        setModifierToEdit={setModifierToEdit}
      />

      <AddModifierModal
        id={lastID}
        isOpen={isAddingModifier}
        setIsOpen={setIsAddingModifier}
        handleSaveAction={handleAddNewItem}
      />
      <EditModifierModal
        isOpen={modifierToEdit !== null && modifierToEdit !== undefined}
        selectedModifier={modifierToEdit}
        handleSaveAction={handleEditModifier}
      />
    </div>
  );
};

export default ModifierServiceMainPage;
