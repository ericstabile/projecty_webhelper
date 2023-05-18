import React from 'react';
import { Button } from 'react-bootstrap';

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
      <td><input defaultValue={item.ID} id={`id-${index}`} /></td>
      <td><input defaultValue={item.Name} id={`name-${index}`} /></td>
      <td><input defaultValue={item.IconPath} id={`iconPath-${index}`} /></td>
      <td><input type="checkbox" defaultChecked={item.IsStackable} id={`isStackable-${index}`} /></td>
      <td><input defaultValue={item.MaxStack} id={`maxStack-${index}`} /></td>
      <td>
        <Button variant="success" onClick={handleSave}>Save</Button>
        <Button variant="secondary" onClick={() => toggleEdit(index)}>Cancel</Button>
      </td>
    </>
  );
};

export default EditInventoryObjectRow;
