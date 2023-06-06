import React, { useState, useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";

function ModifierItem({
  modifier,
  isEditing,
  onEditModifier,
  onSaveModifier,
  onRemoveModifier,
}) {
  const [tempStringValue, setTempStringValue] = useState("");
  const [tempBoolValue, setTempBoolValue] = useState(false);
  const [tempIntValue, setTempIntValue] = useState(0);

  useEffect(() => {
    if (modifier !== null && modifier !== undefined) {
      setTempStringValue(modifier.StringValue);
      setTempBoolValue(modifier.BoolValue);
      setTempBoolValue(modifier.IntValue);
    }
  }, [])

  const handleSave = () => {
    onSaveModifier(modifier.ID, {
      StringValue: tempStringValue,
      BoolValue: tempBoolValue,
      IntValue: tempIntValue,
    });
  };

  return (
    <div className="modifier">
      <div className="added-modifier-button-container">
        <button
          className="edit-button"
          onClick={() => onEditModifier(modifier.ID)}
        >
          <FiEdit />
        </button>
        <button
          className="remove-button"
          onClick={() => onRemoveModifier(modifier.ID)}
        >
          <GiCancel />
        </button>
      </div>
      <h4>
        {modifier?.Name} (ID: {modifier?.ID})
      </h4>
      <p>{modifier?.Description}</p>
      {isEditing ? (
        <>
          {modifier?.IsString && (
            <input
              type="text"
              value={tempStringValue}
              onChange={(e) => setTempStringValue(e.target.value)}
            />
          )}
          {modifier?.IsBool && (
            <select
              value={tempBoolValue.toString()}
              onChange={(e) => setTempBoolValue(e.target.value === "true")}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          )}
          {modifier?.IsInt && (
            <input
              type="number"
              value={tempIntValue}
              onChange={(e) => setTempIntValue(Number(e.target.value))}
            />
          )}
          <button className="save-modifier-button" onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          {modifier?.IsString && <p>Value: {tempStringValue}</p>}
          {modifier?.IsBool && (
            <p>Value: {modifier.BoolValue ? "True" : "False"}</p>
          )}
          {modifier?.IsInt && <p>Value: {modifier.IntValue}</p>}
        </>
      )}
    </div>
  );
}

export default ModifierItem;
