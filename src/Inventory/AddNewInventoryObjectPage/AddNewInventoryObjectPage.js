import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CustomAnimatedLabel from '../../GlobalComponents/CustomAnimatedLabel/CustomAnimatedLabel';
import AddNewInventoryObjectFormComponent from '../AddNewInventoryObjectForm/AddNewInventoryObjectForm';
import './AddNewInventoryObjectPage.css';
import { InventoryContext } from '../../GlobalComponents/Contexts/InventoryContext';

const AddNewInventoryObjectPage = () => {
  const navigate = useNavigate();

  const {
    lastID,
    assetPathList
  } = useContext(InventoryContext);

  return (
    <div className="main-inventory-container">
      <CustomAnimatedLabel text="Add Item" className="custom-label" />
      <Button variant="primary" onClick={() => navigate('/inventory')} className="custom-button">
        Go Back
      </Button>
        <AddNewInventoryObjectFormComponent
          onAddItem={onAddItem}
          initialLastId={lastID}
        />
    </div>
  );
}

export default AddNewInventoryObjectPage;
