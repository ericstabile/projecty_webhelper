import React, { useState, useContext, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { 
  BiArrowToTop,
  BiArrowToBottom 
} from "react-icons/bi";
import {
  ReadOnlyTextField,
  ReadOnlyFormCheckField,
} from "../../GlobalComponents/ReadOnlyFormGroupFields/ReadOnlyFormGroupFieldsComponent";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";

const InventoryModifierComponent = ({ modifier }) => {
  const [currentModifier, setCurrentModifier] = useState(modifier);
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

  return (
    <Container key={currentModifier.ID}>
      {currentModifierData && (
        <>
          <div className="inventory-modifier-component-container">
          <div className="button-heading-container"> {/* Added container */}
              <Button
                className="inventory-modifier-expand-button"
                onClick={handleExpandClickEvent}
              >
                {isModifierExpanded ? <BiArrowToTop /> : <BiArrowToBottom /> }
              </Button>
              <h4>Modifier Overrides</h4>
            </div>
            <div className="line"></div>
            {isModifierExpanded && (
              <Form>
                <ReadOnlyTextField
                  controlId="ModifierID"
                  label="Modifier ID"
                  value={currentModifier.ID}
                />
                <ReadOnlyTextField
                  label="Modifier Name"
                  value={currentModifierData.Name}
                />
                <ReadOnlyTextField
                  label="Modifier Description"
                  value={currentModifierData.Description}
                />
                {currentModifierData.IsString && (
                  <ReadOnlyTextField
                    label="String Value"
                    value={currentModifierData.StringValue}
                  />
                )}
                {currentModifierData.IsBool && (
                  <ReadOnlyFormCheckField
                    label="Bool Value"
                    value={currentModifierData.BoolValue}
                  />
                )}
                {currentModifierData.IsInt && (
                  <ReadOnlyTextField
                    label="Int Value"
                    value={currentModifierData.IntValue}
                  />
                )}

                {modifier.OverrideValue !== null &&
                  modifier.OverrideValue !== undefined && (
                    <ReadOnlyTextField
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
    </Container>
  );
};

export default InventoryModifierComponent;
