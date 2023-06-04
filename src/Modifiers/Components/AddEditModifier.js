import React, { useState, useEffect } from "react";

const AddEditModifier = ({ id, modifier, isEdit, onSave }) => {
  const [currentId, setCurrentId] = useState(id);
  const [isEditing, setIsEditing] = useState(isEdit);

  const [tempModifier, setTempModifier] = useState({
    Name: "",
    Description: "",
    IsString: false,
    StringValue: "",
    IsBool: false,
    BoolValue: false,
    IsInt: false,
    IntValue: 0,
  });

  useEffect(() => {
    setCurrentId(id);
  }, [id]);

  useEffect(() => {
    if (modifier !== null && modifier !== undefined) {
      setTempModifier(modifier);
    } else {
      setTempModifier({
        Name: "",
        Description: "",
        IsString: false,
        StringValue: "",
        IsBool: false,
        BoolValue: false,
        IsInt: false,
        IntValue: 0,
        ...modifier,
      });
    }
  }, [modifier]);

  const handleSave = () => {
    if (isEditing) {
      onSave({ ...tempModifier });
    } else {
      onSave({ ID: currentId, ...tempModifier });
    }
  };

  const handleChange = (e) => {
    const targetId = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (targetId === "IsString" && value) {
      setTempModifier({
        ...tempModifier,
        IsString: value,
        IsBool: false,
        IsInt: false,
        [e.target.name]: value,
      });
    } else if (targetId === "IsBool" && value) {
      setTempModifier({
        ...tempModifier,
        IsBool: value,
        IsString: false,
        IsInt: false,
        [e.target.name]: value,
      });
    } else if (targetId === "IsInt" && value) {
      setTempModifier({
        ...tempModifier,
        IsInt: value,
        IsString: false,
        IsBool: false,
        [e.target.name]: value,
      });
    } else {
      setTempModifier({
        ...tempModifier,
        [e.target.name]: value,
      });
    }
  };

  return (
    <div className="add-edit-modifier-main-container">
      {isEditing && <h2>Edit Modifier</h2>}
      {!isEditing && <h2>Add New Modifier</h2>}

      <div className="add-edit-modifier-input-field">
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={tempModifier.Name}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>

      <div className="add-edit-modifier-input-field">
        <label htmlFor="Description">Description:</label>
        <textarea
          id="Description"
          name="Description"
          value={tempModifier.Description}
          autoComplete="off"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="add-edit-modifier-input-field">
        <label htmlFor="IsString">Is String?</label>
        <input
          type="checkbox"
          id="IsString"
          name="IsString"
          checked={tempModifier.IsString}
          onChange={handleChange}
        />
      </div>

      {tempModifier.IsString && (
        <div className="add-edit-modifier-input-field">
          <label htmlFor="StringValue">String Value:</label>
          <input
            type="text"
            id="StringValue"
            name="StringValue"
            value={tempModifier.StringValue}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
      )}

      <div className="add-edit-modifier-input-field">
        <label htmlFor="IsBool">Is Boolean?</label>
        <input
          type="checkbox"
          id="IsBool"
          name="IsBool"
          checked={tempModifier.IsBool}
          onChange={handleChange}
        />
      </div>

      {tempModifier.IsBool && (
        <div className="add-edit-modifier-input-field">
          <label htmlFor="BoolValue">Boolean Value:</label>
          <input
            type="checkbox"
            id="BoolValue"
            name="BoolValue"
            checked={tempModifier.BoolValue}
            onChange={handleChange}
          />
        </div>
      )}

      <div className="add-edit-modifier-input-field">
        <label htmlFor="IsInt">Is Integer?</label>
        <input
          type="checkbox"
          id="IsInt"
          name="IsInt"
          checked={tempModifier.IsInt}
          onChange={handleChange}
        />
      </div>

      {tempModifier.IsInt && (
        <div className="add-edit-modifier-input-field">
          <label htmlFor="IntValue">Integer Value:</label>
          <input
            type="number"
            id="IntValue"
            name="IntValue"
            value={tempModifier.IntValue}
            autoComplete="off"
            onChange={(e) =>
              handleChange({
                ...e,
                target: { ...e.target, value: Number(e.target.value) },
              })
            }
          />
        </div>
      )}

      <button className="add-edit-modifier-save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default AddEditModifier;
