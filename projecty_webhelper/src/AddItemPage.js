// AddItemPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddItemPage = ({ onAddItem, lastID }) => {
  const navigate = useNavigate();

  const handleAddItem = (e) => {
    e.preventDefault();
    const item = {
      ID: lastID + 1,
      Name: e.target.Name.value,
      IconPath: e.target.IconPath.value,
      IsStackable: e.target.IsStackable.checked,
      MaxStack: e.target.MaxStack.value,
    };
    onAddItem(item);
    navigate('/inventory');
  };

  return (
    <form onSubmit={handleAddItem}>
      <input name="ID" value={lastID + 1} readOnly />
      <input name="Name" placeholder="Name" />
      <input name="IconPath" placeholder="IconPath" />
      <input type="checkbox" name="IsStackable" />
      <input name="MaxStack" placeholder="MaxStack" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItemPage;
