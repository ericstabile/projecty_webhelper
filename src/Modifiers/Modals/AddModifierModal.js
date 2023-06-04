import React from "react";
import AddEditModifier from "../Components/AddEditModifier";
import ModalComponent from "../../GlobalComponents/ModalComponent/ModalComponent";

function AddModifierModal({
  id,
  isOpen,
  setIsOpen,
  selectedModifier,
  handleSaveAction,
}) {
  const handleClose = () => {
    setIsOpen(false);
  }
  const handleSave = (editedModifier) => {
    handleSaveAction(editedModifier);
    setIsOpen(false);
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={handleClose}>
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
