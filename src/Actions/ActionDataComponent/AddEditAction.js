import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AddEditAction = ({ id, action, isEdit, onSave }) => {
  const [currentId, setCurrentId] = useState(id);
  const [selectedAction, setSelectedAction] = useState(action);
  const [isEditing, setIsEditing] = useState(isEdit);
  const [tempName, setTempName] = useState("");
  const [tempShortDesc, setTempShortDesc] = useState("");
  const [tempLongDesc, setTempLongDesc] = useState("");

  useEffect(() => {
    if (selectedAction === null || selectedAction === undefined) {
      return;
    }

    setTempName(selectedAction.Name);
    setTempShortDesc(selectedAction.Description_Short);
    setTempLongDesc(selectedAction.Description_Long);
  }, []);

  const handleSave = () => {
    if (isEditing) {
      const editedAction = {
        ...selectedAction,
        Name: tempName,
        Description_Short: tempShortDesc,
        Description_Long: tempLongDesc,
      };
      onSave(editedAction);
    } else {
      const newAction = {
        ID: currentId,
        Name: tempName,
        Description_Short: tempShortDesc,
        Description_Long: tempLongDesc,
        Modifiers: [],
      };
      onSave(newAction);
    }
  };

  return (
    <div className="add-edit-main-container">
      {isEditing && <h2>Edit Action</h2>}
      {!isEditing && <h2>Create New Action</h2>}

      <div className="add-edit-action-input-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={tempName}
          autoComplete="off"
          onChange={(e) => setTempName(e.target.value)}
        />
      </div>

      <div className="add-edit-action-input-field">
        <label htmlFor="short-description">Short Description:</label>
        <input
          type="text"
          id="short-description"
          value={tempShortDesc}
          autoComplete="off"
          onChange={(e) => setTempShortDesc(e.target.value)}
        />
      </div>

      <div className="add-edit-action-input-field">
        <label htmlFor="long-description">Long Description:</label>
        <textarea
          id="long-description"
          value={tempLongDesc}
          autoComplete="off"
          onChange={(e) => setTempLongDesc(e.target.value)}
        ></textarea>
      </div>

      <button className="add-edit-action-save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

AddEditAction.propTypes = {
  id: PropTypes.number.isRequired,
  selectedAction: PropTypes.shape({
    Name: PropTypes.string,
    Description_Short: PropTypes.string,
    Description_Long: PropTypes.string,
  }),
  isEdit: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddEditAction;
