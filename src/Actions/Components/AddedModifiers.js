import React, { useState, useEffect, useContext } from "react";
import ModifierItem from './ModifierItem';
import { ModifierContext } from '../../GlobalComponents/Contexts/ModifierContext';

function AddedModifiers({ action, handleRemoveModifier }) {
  const [selectedAction, setSelectedAction] = useState(action);
  const [selectedModifierID, setSelectedModifierID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { modifierData } = useContext(ModifierContext);

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
          return {
            ...modifier,
            ...updatedValues,
          };
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
    if (modifierData !== undefined && modifierData !== null) {
      const detectedModifier = modifierData.find(modifier => modifier.ID === id);
      console.log('detected modifier: ', detectedModifier); 
      return detectedModifier;
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