import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import InventoryModifierComponent from "./InventoryModifierComponent";

const InventoryActionComponent = ({ action }) => {
  const [currentAction, setCurrentAction] = useState(action);
  const [currentActionDetails, setCurrentActionDetails] = useState(null);
  const [hasModifiers, setHasModifiers] = useState(false);

  const { actionData } = useContext(AppContext);

  const getActionDetails = () => {
    if (currentAction !== null && currentAction !== undefined) {
      actionData.map((a, idx) => {
        if (a.ID === currentAction.ID) {
          setCurrentActionDetails(a);
        }
      });
    }
  };

  useEffect(() => {
    setCurrentAction(action);
    getActionDetails();
    setHasModifiers(
      currentAction.ModifierOverrides &&
        currentAction.ModifierOverrides.length > 0
    );
  }, [action]);

  useEffect(() => {
    getActionDetails();
    setHasModifiers(
      currentAction.ModifierOverrides &&
        currentAction.ModifierOverrides.length > 0
    );
  }, []);

  return (
    <div key={currentAction.ID}>
      <h4>
        {currentActionDetails && (
          <div className="inventory-action-component-container">
            <span>
              {currentActionDetails.Name} - (ID: {currentActionDetails.ID})
            </span>

            <label>
              Short Description: {currentActionDetails.Description_Short}
            </label>
          </div>
        )}
      </h4>
      {hasModifiers && (
        <>
          {action.ModifierOverrides.map((modifier, modIndex) => (
            <InventoryModifierComponent modifier={modifier} key={modIndex} />
          ))}
        </>
      )}
    </div>
  );
};

export default InventoryActionComponent;
