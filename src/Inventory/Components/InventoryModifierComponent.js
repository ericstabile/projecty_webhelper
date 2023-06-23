import React, { useState, useContext, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { 
  BiArrowToTop, 
  BiArrowToBottom 
} from "react-icons/bi";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import { RO_MultiLine } from "../CustomFields/InventoryCustomFields";

const InventoryModifierComponent = ({ modifier, isOverwritten }) => {
  const [currentModifier, setCurrentModifier] = useState(modifier);
  const [overwritten, setOverwritten] = useState(isOverwritten);
  const [currentModifierData, setCurrentModifierData] = useState(null);
  const [isModifierExpanded, setIsModifierExpanded] = useState(false);

  const { modifierData } = useContext(AppContext);

  const handleExpandClickEvent = () => {
    setIsModifierExpanded(!isModifierExpanded);
  };

  const getModifierDetails = useCallback(() => {
    if (currentModifier) {
      const modifierDetails = modifierData.find(
        (m) => m.ID === currentModifier.ID
      );
      if (modifierDetails) {
        setCurrentModifierData(modifierDetails);
      }
    }
  }, [currentModifier, modifierData]);

  useEffect(() => {
    setCurrentModifier(modifier);
    getModifierDetails();
  }, [modifier, getModifierDetails]);

  useEffect(() => {
    setOverwritten(isOverwritten);
  }, [isOverwritten]);

  return (
    <div key={currentModifier.ID} className="inventory-modifier-component">
      {currentModifierData && (
        <>
          <div
            className={`inventory-modifier-component-container ${
              overwritten ? "inventory-modifier-overwritten" : ""
            }`}
          >
            <div className="button-heading-container">
              <Button
                className="inventory-modifier-expand-button"
                onClick={handleExpandClickEvent}
              >
                {isModifierExpanded ? <BiArrowToTop /> : <BiArrowToBottom />}
              </Button>
              <h4>{currentModifierData.Name}</h4>
            </div>
            <div className="line"></div>
            {isModifierExpanded && (
              <Form>
                <br />
                <RO_MultiLine
                  controlId="ModifierID"
                  label="Modifier ID"
                  value={currentModifier.ID}
                />
                <RO_MultiLine
                  label="Modifier Description"
                  value={currentModifierData.Description}
                />
                {currentModifierData.IsString && (
                  <RO_MultiLine
                    label="String Value"
                    value={currentModifierData.StringValue}
                  />
                )}
                {currentModifierData.IsBool && (
                  <RO_MultiLine
                    label="Bool Value"
                    value={currentModifierData.BoolValue === true ? "TRUE" : "FALSE"}
                  />
                )}
                {currentModifierData.IsInt && (
                  <RO_MultiLine
                    label="Int Value"
                    value={currentModifierData.IntValue}
                  />
                )}

                {modifier.OverrideValue !== null &&
                  modifier.OverrideValue !== undefined && (
                    <RO_MultiLine
                      controlId="OverrideValue"
                      label="Override Value"
                      value={modifier.OverrideValue}
                    />
                  )}
              </Form>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryModifierComponent;
