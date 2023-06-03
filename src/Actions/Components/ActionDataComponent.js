import React, { useState, useContext } from "react";
import ExpandButton from "./ExpandButton";
import AddedModifiers from "./AddedModifiers";
import AddNewModifierModal from "../Modals/AddNewModifierModal";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import { TbEdit } from "react-icons/tb";
import EditActionModal from "../Modals/EditActionModal";

function ActionDataComponent({ actionData, setActionData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedActionIDs, setExpandedActionIDs] = useState([]);
  const [selectedActionForEdit, setSelectedActionForEdit] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedActionForAddModifier, setSelectedActionForAddModifier] =
    useState(null);

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
            <ExpandButton
              actionId={action.ID}
              isExpanded={expandedActionIDs.includes(action.ID)}
              handleToggleExpand={handleToggleExpand}
            />
            <button
              className="action-edit-button"
              onClick={() => handleEditAction(action)}
            >
              <TbEdit />
            </button>
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
              <div className="action-modifiers">
                <h3>Modifiers</h3>
                <button
                  className="action-add-modifier-button"
                  onClick={() => {
                    setSelectedActionForAddModifier(action);
                    setIsAddModalOpen(true);
                  }}
                >
                  Add New Modifier
                </button>
              </div>
              <AddedModifiers
                action={action}
                handleRemoveModifier={handleRemoveModifier}
              />
            </div>
          )}
        </div>
      ))}

      {selectedActionForEdit && (
        <EditActionModal
          id={selectedActionForEdit.ID}
          isOpen={true}
          selectedAction={selectedActionForEdit}
          setSelectedAction={setSelectedActionForEdit}
          handleSaveAction={handleSaveAction}
        />
      )}

      {isAddModalOpen && (
        <AddNewModifierModal
          isOpen={true}
          onClose={() => setIsAddModalOpen(false)}
          modifierData={modifierData}
          selectedActionForAddModifier={selectedActionForAddModifier}
          handleAddModifier={handleAddModifier}
        />
      )}
    </div>
  );
}

export default ActionDataComponent;
