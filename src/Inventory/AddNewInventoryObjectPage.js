import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CustomAnimatedLabel from '../CustomAnimatedLabel';
import AddNewInventoryObjectFormComponent from './Component/AddNewInventoryObjectFormComponent';

const AddNewInventoryObjectPage = ({ inventoryObjectData, setInventoryObjectData }) => {
  const navigate = useNavigate();

  const handleAddItem = (newItem) => {
    const newInventoryObjectData = [...inventoryObjectData, newItem];
    setInventoryObjectData(newInventoryObjectData);
    navigate('/inventory');
  };

  return (
    <div className="main-container">
      <CustomAnimatedLabel text="Add Item" />
      <Button variant="primary" onClick={() => navigate('/inventory')}>Go Back</Button>
      <div className="form-container">
        <AddNewInventoryObjectFormComponent onAddItem={handleAddItem} />
      </div>
    </div>
  );
}

export default AddNewInventoryObjectPage;
