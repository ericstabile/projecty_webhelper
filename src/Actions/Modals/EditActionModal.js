import React from "react";
import AddEditAction from "../Components/AddEditAction";
import ModalComponent from "../../GlobalComponents/ModalComponent/ModalComponent";

function EditActionModal({
  id,
  isOpen,
  selectedAction,
  setSelectedAction,
  handleSaveAction,
}) {
  const handleSave = (editedAction) => {
    setSelectedAction(editedAction);
    handleSaveAction(editedAction);
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={() => setSelectedAction(null)}>
      <AddEditAction
        id={id}
        action={selectedAction}
        isEdit={true}
        onSave={handleSave}
      />
    </ModalComponent>
  );
}

export default EditActionModal;
