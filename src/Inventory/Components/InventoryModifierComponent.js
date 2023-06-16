import React, { useState, useContext, useEffect, useCallback } from "react";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FormCheck from "react-bootstrap/FormCheck";

const ReadOnlyTextField = ({ controlId, label, value }) => (
  <FormGroup as={Row} controlId={controlId}>
    <Form.Label column sm="2">
      {label}:
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly value={value} />
    </Col>
  </FormGroup>
);

const InventoryModifierComponent = ({ modifier }) => {
  const [currentModifier, setCurrentModifier] = useState(modifier);
  const [currentModifierData, setCurrentModifierData] = useState(null);

  const { modifierData } = useContext(AppContext);

  const getModifierDetails = useCallback(() => {
    if (currentModifier) {
      const modifierDetails = modifierData.find(m => m.ID === currentModifier.ID);
      if(modifierDetails){
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
        <div className="inventory-modifier-component-container">
          <Form>
            <ReadOnlyTextField controlId="ModifierID" label="Modifier ID" value={currentModifier.ID} />
            <ReadOnlyTextField label="Modifier Name" value={currentModifierData.Name} />
            <ReadOnlyTextField controlId="OverrideValue" label="Override Value" value={modifier.OverrideValue} />
            {currentModifierData.IsString && (
              <ReadOnlyTextField label="String Value" value={currentModifierData.StringValue} />
            )}
            {currentModifierData.IsBool && (
              <FormGroup as={Row}>
                <Form.Label column sm="2">
                  Bool Value:
                </Form.Label>
                <Col sm="10">
                  <FormCheck disabled checked={currentModifierData.BoolValue}/>
                </Col>
              </FormGroup>
            )}
            {currentModifierData.IsInt && (
              <ReadOnlyTextField label="Int Value" value={currentModifierData.IntValue} />
            )}
          </Form>
        </div>
      )}
    </Container>
  );
};

export default InventoryModifierComponent;
