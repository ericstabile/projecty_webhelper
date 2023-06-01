import React, { useState, useEffect } from "react";

function AddedModifiersComponent({action, handleRemoveModifier}) {
  const [selectedAction, setSelectedAction] = useState(action);

  useEffect(() => {
    setSelectedAction(action);
  }, [action]);
  
  return (
    <>
      {selectedAction.Modifiers.length > 0 ? (
        selectedAction.Modifiers.map((modifier) => (
          <div key={modifier.ID} className="modifier">
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
            <button
              onClick={() =>
                handleRemoveModifier(action.ID, modifier.ID)
              }
            >
              Remove Modifier
            </button>
          </div>
        ))
      ) : (
        <p>No Modifiers Added</p>
      )}
    </>
  );
};

export default AddedModifiersComponent