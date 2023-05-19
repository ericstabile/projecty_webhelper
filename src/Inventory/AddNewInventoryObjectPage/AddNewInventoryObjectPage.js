import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CustomAnimatedLabel from '../../GlobalComponents/CustomAnimatedLabel/CustomAnimatedLabel';
import AddNewInventoryObjectFormComponent from '../AddNewInventoryObjectForm/AddNewInventoryObjectForm';
import './AddNewInventoryObjectPage.css';

const AddNewInventoryObjectPage = ({ onAddItem, lastID }) => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <CustomAnimatedLabel text="Add Item" />
      <Button variant="primary" onClick={() => navigate('/inventory')}>Go Back</Button>
      <div className="form-container">
        <AddNewInventoryObjectFormComponent 
          onAddItem={onAddItem}
          initialLastId={lastID} />
      </div>
    </div>
  );
}

export default AddNewInventoryObjectPage;
