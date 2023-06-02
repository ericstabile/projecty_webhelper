import React, { useState } from "react";

const EditActionComponent = ({ selectedAction, onSave }) => {
  const [name, setName] = useState(selectedAction.Name);
  const [shortDescription, setShortDescription] = useState(
    selectedAction.Description_Short
  );
  const [longDescription, setLongDescription] = useState(
    selectedAction.Description_Long
  );

  const handleSave = () => {
    const editedAction = {
      ...selectedAction,
      Name: name,
      Description_Short: shortDescription,
      Description_Long: longDescription,
    };
    onSave(editedAction);
  };

  return (
    <div className="edit-action-div">
      <h2>Edit Action</h2>
      <div className="edit-action-input-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="edit-action-input-field">
        <label htmlFor="short-description">Short Description:</label>
        <input
          type="text"
          id="short-description"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </div>

      <div className="edit-action-input-field">
        <label htmlFor="long-description">Long Description:</label>
        <textarea
          id="long-description"
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
        ></textarea>
      </div>

      <button className="edit-action-input-save-button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditActionComponent;
