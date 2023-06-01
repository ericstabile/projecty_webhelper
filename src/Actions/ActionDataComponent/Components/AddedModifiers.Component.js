import React, { useState, useEffect } from "react";
import './AD.Component.css';
import { GiCancel} from "react-icons/gi"; 
import { FiEdit } from "react-icons/fi";

function AddedModifiersComponent({action, handleRemoveModifier, handleEditModifier}) {
  const [selectedAction, setSelectedAction] = useState(action);

  useEffect(() => {
    setSelectedAction(action);
  }, [action]);
  
  return (
    <>
      {selectedAction.Modifiers.length > 0 ? (
        selectedAction.Modifiers.map((modifier) => (
          <div key={modifier.ID} className="modifier">
            <div className="added-modifier-button-container">
              <button
                className="edit-button"
                onClick={() => handleEditModifier(action.ID, modifier.ID)}
              >
                <FiEdit />
              </button>
              <button
                className="remove-button"
                onClick={() => handleRemoveModifier(action.ID, modifier.ID)}
              >
                <GiCancel />
              </button>
            </div>
            <h4>
              {modifier.Name} (ID: {modifier.ID})
            </h4>
            <p>{modifier.Description}</p>
            {modifier.IsString && (
              <p>String Value: {modifier.StringValue}</p>
            )}
            {modifier.IsBool && (
              <p>Bool Value: {modifier.BoolValue}</p>
            )}
            {modifier.IsInt && <p>Int Value: {modifier.IntValue}</p>}
          </div>
        ))
      ) : (
        <p>No Modifiers Added</p>
      )}
    </>
  );
};

export default AddedModifiersComponent
