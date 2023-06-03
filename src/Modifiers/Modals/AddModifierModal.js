import React from "react";
import AddEditModifier from "../Components/AddEditModifier";
import ModalComponent from "../../GlobalComponents/ModalComponent/ModalComponent";

function AddModifierModal({
  id,
  isOpen,
  selectedModifier,
  setSelectedModifier,
  handleSaveAction,
}) {
  const handleSave = (editedModifier) => {
    setSelectedModifier(editedModifier);
    handleSaveAction(editedModifier);
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={() => setSelectedModifier(null)}>
      <AddEditModifier
        id={id}
        modifier={selectedModifier}
        isEdit={false}
        onSave={handleSave}
      />
    </ModalComponent>
  );
}

export default AddModifierModal;
