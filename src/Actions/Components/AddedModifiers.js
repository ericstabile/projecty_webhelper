import React, { useState, useEffect, useContext } from "react";
import ModifierItem from "./ModifierItem";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";

function AddedModifiers({
  action,
  handleUpdateModifier,
  handleRemoveModifier,
}) {
  const [selectedAction, setSelectedAction] = useState(action);
  const [selectedModifierID, setSelectedModifierID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { modifierData } = useContext(AppContext);

  useEffect(() => {
    setSelectedAction(action);
  }, [action]);

  const handleEditModifier = (modifierID) => {
    setSelectedModifierID(modifierID);
    setIsEditing(true);
  };

  const handleSaveModifier = (modifierID, updatedValues) => {
    const mod = getModifierById(modifierID);
    if (mod.IsString === true) {
      handleUpdateModifier(
        selectedAction.ID,
        modifierID,
        updatedValues.StringValue
      );
    } else if (mod.IsBool === true) {
      handleUpdateModifier(
        selectedAction.ID,
        modifierID,
        updatedValues.BoolValue
      );
    } else if (mod.IsInt === true) {
      handleUpdateModifier(
        selectedAction.ID,
        modifierID,
        updatedValues.IntValue
      );
    }

    setIsEditing(false);
  };

  const getModifierById = (id) => {
    if (
      id !== undefined &&
      modifierData !== undefined &&
      modifierData !== null
    ) {
      return modifierData.find((modifier) => modifier.ID === id);
    }
  };

  return (
    <>
      {selectedAction.Modifiers.length > 0 ? (
        selectedAction.Modifiers.map((modifier) => (
          <ModifierItem
            key={modifier.ID}
            overrideValue={modifier.OverrideValue}
            modifier={getModifierById(modifier.ID)}
            isEditing={isEditing && selectedModifierID === modifier.ID}
            onEditModifier={handleEditModifier}
            onSaveModifier={handleSaveModifier}
            onRemoveModifier={() =>
              handleRemoveModifier(action.ID, modifier.ID)
            }
          />
        ))
      ) : (
        <p>No Modifiers Added</p>
      )}
    </>
  );
}

export default AddedModifiers;
