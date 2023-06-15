import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";

const InventoryModifierComponent = ({ modifier }) => {
  const [currentModifier, setCurrentModifier] = useState(modifier);
  const [currentModifierDetails, setCurrentModifierDetails] = useState(null);

  const { modifierData } = useContext(AppContext);

  const getModifierDetails = () => {
    if (currentModifier !== null && currentModifier !== undefined) {
      modifierData.map((m, idx) => {
        if (m.ID === currentModifier.ID) {
          setCurrentModifierDetails(m);
        }
      });
    }
  };

  useEffect(() => {
    setCurrentModifier(modifier);
    getModifierDetails();
  }, [modifier]);

  useEffect(() => {
    getModifierDetails();
  }, []);

  return (
    <div key={currentModifier.ID}>
      <label>
        ModifierID:
        <input
          type="text"
          name="ModifierID"
          value={currentModifier.ID}
          // onChange={(e) => handleModifierChange(invIndex, actIndex, modIndex, e)}
        />
      </label>
      <label>
        OverrideValue:
        <input
          type="text"
          name="OverrideValue"
          value={modifier.OverrideValue}
          // onChange={(e) => handleModifierChange(invIndex, actIndex, modIndex, e)}
        />
      </label>
    </div>
  );
};

export default InventoryModifierComponent;
