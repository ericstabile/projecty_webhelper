import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import InventoryModifierComponent from "./InventoryModifierComponent";

const InventoryActionComponent = ({ action }) => {
  const [currentAction, setCurrentAction] = useState(action);
  const [currentActionDetails, setCurrentActionDetails] = useState(null);
  const [hasModifiers, setHasModifiers] = useState(false);
  const [isActionExpanded, setIsActionExpanded] = useState(false);

  const { actionData } = useContext(AppContext);

  const handleExpandActionClickEvent = () => {
    setIsActionExpanded(!isActionExpanded);
  };

  const getActionDetails = () => {
    if (currentAction !== null && currentAction !== undefined) {
      actionData.map((a, idx) => {
        if (a.ID === currentAction.ID) {
          setCurrentActionDetails(a);
        }
      });
    }
  };

  const getModifierDetails = () => {
    let showModifiers = 
      (currentAction?.ModifierOverrides && currentAction?.ModifierOverrides.length > 0) ||
      (currentActionDetails?.Modifiers && currentActionDetails?.Modifiers.length > 0);
    setHasModifiers(showModifiers);
  };

  useEffect(() => {
    setCurrentAction(action);
    getActionDetails();
    getModifierDetails();
  }, [action]);

  useEffect(() => {
    getActionDetails();
    getModifierDetails();
  }, []);

  return (
    <div
      key={currentAction.ID}
      className="inventory-action-component-container"
    >
      <h4>
        {currentActionDetails && (
          <div className="inventory-action-details">
            <div className="inventory-action-heading-container">
              <div className="left">
                <Button
                  className="inventory-action-expand-button"
                  variant="success"
                  onClick={handleExpandActionClickEvent}
                >
                  {isActionExpanded && <b>Hide</b>}
                  {!isActionExpanded && <b>Show</b>}
                </Button>
              </div>
              <div className="center">
                <h4>
                  {currentActionDetails.Name} - (ID: {currentActionDetails.ID})
                </h4>
              </div>
              <div className="right"></div>
            </div>
            <div className="line"></div>
            {isActionExpanded && (
              <label>
                Short Description: {currentActionDetails.Description_Short}
              </label>
            )}
          </div>
        )}
      </h4>
      {hasModifiers && isActionExpanded && (
        <div className="inventory-action-modifier-container">
          {currentActionDetails.Modifiers.map((modifier, index) => {
            const override = action.ModifierOverrides?.find(
              (mo) => mo.ID === modifier.ID
            );
            const displayModifier = override || modifier;
            return (
              <InventoryModifierComponent
                modifier={displayModifier}
                key={index}
                isOverwritten={override}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InventoryActionComponent;
