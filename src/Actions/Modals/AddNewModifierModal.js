import React from "react";
import ModalComponent from "../../GlobalComponents/ModalComponent/ModalComponent";

function AddNewModifierModal({
  isOpen,
  onClose,
  modifierData,
  selectedActionForAddModifier,
  handleAddModifier,
}) {
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <div className="add-modifier-div">
        <h4>Add New Modifier</h4>
        <select
          className="select-modifier"
          onChange={(e) => {
            const selectedModifier = modifierData.find(
              (modifier) => modifier.ID === parseInt(e.target.value)
            );
            if (selectedActionForAddModifier) {
              handleAddModifier(
                selectedActionForAddModifier.ID,
                selectedModifier
              );
            }
            onClose();
          }}
        >
          <option value="">Select a modifier</option>
          {modifierData.map((modifier) => (
            <option key={modifier.ID} value={modifier.ID}>
              {modifier.Name}
            </option>
          ))}
        </select>
      </div>
    </ModalComponent>
  );
}

export default AddNewModifierModal;
