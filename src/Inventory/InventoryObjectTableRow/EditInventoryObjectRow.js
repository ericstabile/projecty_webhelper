import React from 'react';
import { Button } from 'react-bootstrap';
import './EditInventoryObjectRow.css';

const EditInventoryObjectRow = ({ item, index, saveEdit, toggleEdit }) => {
  const handleSave = () => {
    saveEdit(
      index,
      document.getElementById(`id-${index}`).value,
      document.getElementById(`name-${index}`).value,
      document.getElementById(`iconPath-${index}`).value,
      document.getElementById(`isStackable-${index}`).checked,
      document.getElementById(`maxStack-${index}`).value
    );
  };

  return (
    <>
      <td><input className="edit-row-input id-input" defaultValue={item.ID} id={`id-${index}`} /></td>
      <td><input className="edit-row-input" defaultValue={item.Name} id={`name-${index}`} /></td>
      <td><input className="edit-row-input" defaultValue={item.IconPath} id={`iconPath-${index}`} /></td>
      <td className="relative-td">
        <div className="checkbox-td">
          <label className="checkbox-container">
            <input type="checkbox" defaultChecked={item.IsStackable} id={`isStackable-${index}`} />
            <span className="checkbox-checkmark"></span>
          </label>
        </div>
      </td>
      <td><input className="edit-row-input max-stack-input" defaultValue={item.MaxStack} id={`maxStack-${index}`} /></td>
      <td>
        <Button variant="success" onClick={handleSave}>Save</Button>
        <Button variant="secondary" onClick={() => toggleEdit(index)}>Cancel</Button>
      </td>
    </>
  );
};

export default EditInventoryObjectRow;
