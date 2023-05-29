import React from"react";
import { Button } from "react-bootstrap";
import { BsBalloon } from "react-icons/bs";
import CustomAnimatedLabel from "../../GlobalComponents/CustomAnimatedLabel/CustomAnimatedLabel";
import './AddModifierPage.css';
import { useNavigate } from "react-router-dom";
import AddModifierPageComponent from './AddModifierPageComponent';

const AddModifierPage = () => {
  const navigate = useNavigate();

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

        <CustomAnimatedLabel text="Add New Item" className="custom-label" />
      </div>

      <AddModifierPageComponent navigate={navigate} />
    </div>
  );
};

export default AddModifierPage;
