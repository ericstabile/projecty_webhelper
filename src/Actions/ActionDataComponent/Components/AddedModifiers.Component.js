import React, { useState, useEffect } from "react";
import "./AD.Component.css";
import { GiCancel } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";

function AddedModifiersComponent({ action, handleRemoveModifier }) {
  const [selectedAction, setSelectedAction] = useState(action);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedModifierID, setSelectedModifierID] = useState(null);
  const [tempStringValue, setTempStringValue] = useState("");
  const [tempBoolValue, setTempBoolValue] = useState(false);
  const [tempIntValue, setTempIntValue] = useState(0);

  useEffect(() => {
    setSelectedAction(action);
  }, [action]);

  const handleEditModifier = (modifierID) => {
    setSelectedModifierID(modifierID);
    setIsEditing(true);
  };

  const handleSaveModifier = () => {
    setSelectedAction((prevSelectedAction) => {
      const updatedModifiers = prevSelectedAction.Modifiers.map((modifier) => {
        if (modifier.ID === selectedModifierID) {
          if (modifier.IsString) {
            modifier.StringValue = tempStringValue;
          }
          if (modifier.IsBool) {
            modifier.BoolValue = tempBoolValue;
          }
          if (modifier.IsInt) {
            modifier.IntValue = tempIntValue;
          }
        }
        return modifier;
      });
      return {
        ...prevSelectedAction,
        Modifiers: updatedModifiers,
      };
    });
    setIsEditing(false);
  };

  return (
    <>
      {selectedAction.Modifiers.length > 0 ? (
        selectedAction.Modifiers.map((modifier) => (
          <div key={modifier.ID} className="modifier">
            <div className="added-modifier-button-container">
              <button
                className="edit-button"
                onClick={() => handleEditModifier(modifier.ID)}
              >
                <FiEdit />
              </button>
              <button
                className="remove-button"
                onClick={() =>
                  handleRemoveModifier(action.ID, modifier.ID)
                }
              >
                <GiCancel />
              </button>
            </div>
            <h4>
              {modifier.Name} (ID: {modifier.ID})
            </h4>
            <p>{modifier.Description}</p>
            {modifier.IsString && (
              <div>
                {isEditing && selectedModifierID === modifier.ID ? (
                  <input
                    type="text"
                    value={tempStringValue}
                    onChange={(e) => setTempStringValue(e.target.value)}
                  />
                ) : (
                  <p>Value: {modifier.StringValue}</p>
                )}
              </div>
            )}
            {modifier.IsBool && (
              <div>
                {isEditing && selectedModifierID === modifier.ID ? (
                  <select
                    value={tempBoolValue}
                    onChange={(e) =>
                      setTempBoolValue(e.target.value === "true")
                    }
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                ) : (
                  <p>Value: {modifier.BoolValue == true ? "True" : "False"}</p>
                )}
              </div>
            )}
            {modifier.IsInt && (
              <div>
                {isEditing && selectedModifierID === modifier.ID ? (
                  <input
                    type="number"
                    value={tempIntValue}
                    onChange={(e) => setTempIntValue(Number(e.target.value))}
                  />
                ) : (
                  <p>Value: {modifier.IntValue}</p>
                )}
              </div>
            )}
            {isEditing && selectedModifierID === modifier.ID && (
              <button onClick={handleSaveModifier}>Save</button>
            )}
          </div>
        ))
      ) : (
        <p>No Modifiers Added</p>
      )}
    </>
  );
}

export default AddedModifiersComponent;
