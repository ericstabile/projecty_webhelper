import React, { useState, useEffect } from "react";
import AddEditModifier from "../Components/AddEditModifier";
import ModalComponent from "../../GlobalComponents/ModalComponent/ModalComponent";

function EditModifierModal({
  editId,
  isOpen,
  selectedModifier,
  handleSaveAction,
}) {
  const [id, setId] = useState(editId);
  const [modifier, setModifier] = useState(selectedModifier);

  const handleClose = () => {
    handleSaveAction(null);
  };

  const handleSave = (editedModifier) => {
    handleSaveAction(editedModifier);
  };

  useEffect(() => {
    setId(editId);
  }, [editId]);

  useEffect(() => {
    setModifier(selectedModifier);
  }, [selectedModifier]);

  return (
    <ModalComponent isOpen={isOpen} onClose={handleClose}>
      <AddEditModifier
        id={id}
        modifier={modifier}
        isEdit={true}
        onSave={handleSave}
      />
    </ModalComponent>
  );
}

export default EditModifierModal;
