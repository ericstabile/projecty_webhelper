import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const AddNewInventoryObjectPage = ({ data, setData }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [iconPath, setIconPath] = useState('');
  const [isStackable, setIsStackable] = useState(false);
  const [maxStack, setMaxStack] = useState('');
  const navigate = useNavigate();

  const handleAddItem = () => {
    const newItem = {
      ID: id,
      Name: name,
      IconPath: iconPath,
      IsStackable: isStackable,
      MaxStack: maxStack
    };
    const newData = [...data, newItem];
    setData(newData);
    navigate('/inventory');
  };

  return (
    <div className="main-container">
      <Button variant="primary" onClick={() => navigate('/inventory')}>Go Back</Button>
      <div className="form-container">
        <div className="form-row">
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Icon Path:</label>
          <input type="text" value={iconPath} onChange={(e) => setIconPath(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Is Stackable:</label>
          <input type="checkbox" checked={isStackable} onChange={(e) => setIsStackable(e.target.checked)} />
        </div>
        <div className="form-row">
          <label>Max Stack:</label>
          <input type="text" value={maxStack} onChange={(e) => setMaxStack(e.target.value)} />
        </div>
        <div className="form-row">
          <Button variant="success" onClick={handleAddItem}>Add</Button>
        </div>
      </div>
    </div>
  );
}

export default AddNewInventoryObjectPage;
