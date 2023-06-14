import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import InventoryModifierComponent from "./InventoryModifierComponent";

const InventoryActionComponent = ({ action }) => {
  const [currentAction, setCurrentAction] = useState(action);
  const [currentActionDetails, setCurrentActionDetails] = useState(null);

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
  }, [action]);

  useEffect(() => {
    getActionDetails();
  }, [])

  return (
    <div key={currentAction.ID}>
      <h4>{currentActionDetails.Name}</h4>
      <label>
        ID:
        <input
          type="text"
          name="ID"
          value={currentAction.ID}
          // onChange={(e) => handleActionChange(actIndex, e)}
        />
      </label>
      <h4>Modifier Overrides</h4>
      {action.ModifierOverrides.map((modifier, modIndex) => (
        <InventoryModifierComponent modifier={modifier} />

        // <div key={modIndex}>
        //   <label>
        //     ModifierID:
        //     <input
        //       type="text"
        //       name="ModifierID"
        //       value={modifier.ModifierID}
        //       // onChange={(e) => handleModifierChange(invIndex, actIndex, modIndex, e)}
        //     />
        //   </label>
        //   <label>
        //     OverrideValue:
        //     <input
        //       type="text"
        //       name="OverrideValue"
        //       value={modifier.OverrideValue}
        //       // onChange={(e) => handleModifierChange(invIndex, actIndex, modIndex, e)}
        //     />
        //   </label>
        // </div>
      ))}
    </div>
  );
};

export default InventoryActionComponent;
