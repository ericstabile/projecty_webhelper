import React, { useEffect, useState } from "react";
import AddEditModifier from "../Components/AddEditModifier";
import ModalComponent from "../../GlobalComponents/ModalComponent/ModalComponent";

function AddModifierModal({
  id,
  isOpen,
  setIsOpen,
  selectedModifier,
  setSelectedModifier,
  handleSaveAction,
}) {
  const handleCLose = () => {
    setSelectedModifier(null);
    setIsOpen(false);
  }
  const handleSave = (editedModifier) => {
    setSelectedModifier(editedModifier);
    handleSaveAction(editedModifier);
    setIsOpen(false);
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={handleCLose}>
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
