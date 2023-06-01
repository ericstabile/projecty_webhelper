import React, { useState, useContext } from "react";
import "./ActionDataComponent.css";
import EditActionComponent from "./EditActionComponent";
import ExpandButtonComponent from "./Components/ExpandButton.Component";
import AddedModifiersComponent from "./Components/AddedModifiers.Component";
import ModalComponent from "../../GlobalComponents/ModalComponent/ModalComponent";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";

function ActionDataComponent({ actionData, setActionData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedActionIDs, setExpandedActionIDs] = useState([]);
  const [selectedActionForEdit, setSelectedActionForEdit] = useState(null);
  const { modifierData } = useContext(AppContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleExpand = (id) => {
    setExpandedActionIDs((prevExpandedActionIDs) => {
      if (prevExpandedActionIDs.includes(id)) {
        return prevExpandedActionIDs.filter((expandedID) => expandedID !== id);
      } else {
        return [...prevExpandedActionIDs, id];
      }
    });
  };

  const handleEditAction = (action) => {
    setSelectedActionForEdit(action);
  };

  const handleSaveAction = (editedAction) => {
    const updatedActionData = actionData.map((action) =>
      action.ID === editedAction.ID ? editedAction : action
    );
    setActionData(updatedActionData);
    setSelectedActionForEdit(null);
  };

  const handleAddModifier = (actionID, modifier) => {
    const updatedActionData = actionData.map((action) => {
      if (action.ID === actionID) {
        return {
          ...action,
          Modifiers: [...action.Modifiers, modifier],
        };
      }
      return action;
    });
    setActionData(updatedActionData);
  };

  const handleRemoveModifier = (actionID, modifierID) => {
    const updatedActionData = actionData.map((action) => {
      if (action.ID === actionID) {
        return {
          ...action,
          Modifiers: action.Modifiers.filter(
            (modifier) => modifier.ID !== modifierID
          ),
        };
      }
      return action;
    });
    setActionData(updatedActionData);
  };

  const filteredActionData = actionData.filter((action) =>
    action.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="action-data-main-container">
      <input
        className="action-data-input-search"
        type="text"
        placeholder="Search by action name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredActionData.map((action) => (
        <div key={action.ID} className="action">
          <div className="action-header">
            <ExpandButtonComponent
              actionId={action.ID}
              isExpanded={expandedActionIDs.includes(action.ID)}
              handleToggleExpand={handleToggleExpand}
            />
            <h2>
              {action.Name} (ID: {action.ID})
            </h2>
          </div>
          {expandedActionIDs.includes(action.ID) && (
            <div className="action-details">
              <p>
                <strong>Short Description: </strong>
                {action.Description_Short}
              </p>
              <p>
                <strong>Long Description: </strong>
                {action.Description_Long}
              </p>
              <h3>Modifiers</h3>
              <AddedModifiersComponent
                action={action}
                handleRemoveModifier={handleRemoveModifier}
              />
              <button onClick={() => handleEditAction(action)}>Edit</button>
              <div>
                <h4>Add New Modifier:</h4>
                <select
                  onChange={(e) => {
                    const selectedModifier = modifierData.find(
                      (modifier) => modifier.ID === parseInt(e.target.value)
                    );
                    handleAddModifier(action.ID, selectedModifier);
                  }}
                >
                  <option value="">Select a modifier</option>
                  {modifierData.map((modifier) => (
                    <option key={modifier.ID} value={modifier.ID}>
                      {modifier.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      ))}
      <ModalComponent
        isOpen={selectedActionForEdit !== null}
        onClose={() => setSelectedActionForEdit(null)}
      >
        {selectedActionForEdit && (
          <EditActionComponent
            selectedAction={selectedActionForEdit}
            onSave={handleSaveAction}
          />
        )}
      </ModalComponent>
    </div>
  );
}

export default ActionDataComponent;
