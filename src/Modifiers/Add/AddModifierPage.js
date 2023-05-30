import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsBalloon } from "react-icons/bs";
import CustomAnimatedLabel from "../../GlobalComponents/CustomAnimatedLabel/CustomAnimatedLabel";
import "./AddModifierPage.css";
import { useNavigate } from "react-router-dom";
import { ModifierContext } from "../../GlobalComponents/Contexts/ModifierContext";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import AddModifierPageComponent from "./AddModifierPageComponent";

const AddModifierPage = () => {
  const navigate = useNavigate();

  const { modifierData, setModifierData } = useContext(AppContext);
  const { lastID, setLastID } = useContext(ModifierContext);

  const handleAddItem = (item) => {
    console.log(item);
    const newItem = { ...item, ID: lastID + 1 };
    setModifierData([...modifierData, newItem]);
    setLastID(lastID + 1);
    navigate("/modifierService");
  };

  return (
    <div className="form-container">
      <div className="header-row">
        <Button
          variant="danger"
          onClick={() => navigate("/modifierService")}
          className="custom-button"
        >
          <BsBalloon />
        </Button>

        <CustomAnimatedLabel text="Add New Modifier" className="custom-label" />
      </div>

      <AddModifierPageComponent
        onAddItem={handleAddItem}
        initialLastId={lastID + 1}
      />
    </div>
  );
};

export default AddModifierPage;
