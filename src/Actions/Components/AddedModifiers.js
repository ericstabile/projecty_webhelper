import React, { useState, useEffect, useContext } from "react";
import ModifierItem from './ModifierItem';
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";

function AddedModifiers({ action, handleRemoveModifier }) {
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
    setSelectedAction((prevSelectedAction) => {
      const updatedModifiers = prevSelectedAction.Modifiers.map((modifier) => {
        if (modifier.ID === modifierID) {
          const mod = getModifierById(modifier.ID);
          console.log('mod', mod);
          if (mod.IsString === true) {
            return { ID: modifierID, OverrideValue: updatedValues.StringValue };
          } else if (mod.IsBool === true) {
            return { ID: modifierID, OverrideValue: updatedValues.BoolValue };
          } else if (mod.IsInt === true) {
            return { ID: modifierID, OverrideValue: updatedValues.IntValue };
          }
          // return {
          //   ...modifier,
          //   ...updatedValues,
          // };
        }
        return modifier;
      });
      return {
        ...prevSelectedAction,
        Modifiers: updatedModifiers,
      };
    });
    setIsEditing(false);
  };

  const getModifierById = (id) => {
    if (id !== undefined && modifierData !== undefined && modifierData !== null) {
      return modifierData.find(modifier => modifier.ID === id);
    }
  }

  return (
    <>
      {selectedAction.Modifiers.length > 0 ? (
        selectedAction.Modifiers.map((modifier) => (
          <ModifierItem
            key={modifier.ID}
            modifier={getModifierById(modifier.ID)}
            isEditing={isEditing && selectedModifierID === modifier.ID}
            onEditModifier={handleEditModifier}
            onSaveModifier={handleSaveModifier}
            onRemoveModifier={() => handleRemoveModifier(action.ID, modifier.ID)}
          />
        ))
      ) : (
        <p>No Modifiers Added</p>
      )}
    </>
  );
}

export default AddedModifiers;