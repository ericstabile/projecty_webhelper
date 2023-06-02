import React, { useState, useContext } from "react";
import "./ActionDataComponent.css";
import EditActionComponent from "./EditActionComponent";
import ExpandButtonComponent from "./Components/ExpandButton.Component";
import AddedModifiersComponent from "./Components/AddedModifiers.Component";
import ModalComponent from "../../GlobalComponents/ModalComponent/ModalComponent";
import AddNewModifierModalComponent from "./Components/AddNewModifierModal.Component";
import { AppContext } from "../../GlobalComponents/Contexts/AppContext";
import { TbEdit } from "react-icons/tb";

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
            <ExpandButtonComponent
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
                    setSelectedActionForAddModifier(action); // Set the action here
                    setIsAddModalOpen(true);
                  }}
                >
                  Add New Modifier
                </button>
              </div>
              <AddedModifiersComponent
                action={action}
                handleRemoveModifier={handleRemoveModifier}
              />
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
      <AddNewModifierModalComponent
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        modifierData={modifierData}
        selectedActionForAddModifier={selectedActionForAddModifier}
        handleAddModifier={handleAddModifier}
      />
    </div>
  );
}

export default ActionDataComponent;
