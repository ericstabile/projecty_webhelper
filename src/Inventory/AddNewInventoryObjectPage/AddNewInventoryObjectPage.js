import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsBalloon } from "react-icons/bs";
import CustomAnimatedLabel from '../../GlobalComponents/CustomAnimatedLabel/CustomAnimatedLabel';
import AddNewInventoryObjectFormComponent from '../AddNewInventoryObjectForm/AddNewInventoryObjectForm';
import './AddNewInventoryObjectPage.css';
import { InventoryContext } from '../../GlobalComponents/Contexts/InventoryContext';

const AddNewInventoryObjectPage = () => {
  const navigate = useNavigate();

  const {
    inventoryObjectData,
    setInventoryObjectData,
    lastID,
    setLastID,
    assetPathList
  } = useContext(InventoryContext);

  const handleAddItem = (item) => {
    const newItem = { ...item, ID: lastID + 1 };
    setInventoryObjectData([...inventoryObjectData, newItem]);
    setLastID(lastID + 1);
    navigate("/inventory");
  };

  return (
    <div className="main-inventory-container">
      <div className="header-row">
        <Button variant="danger" onClick={() => navigate('/inventory')} className="custom-button">
          <BsBalloon />
        </Button>
        
        <CustomAnimatedLabel text="Add New Item" className="custom-label" />
      </div>
      <AddNewInventoryObjectFormComponent
        onAddItem={handleAddItem}
        initialLastId={lastID}
        assetPathList={assetPathList}
      />
    </div>
  );
}

export default AddNewInventoryObjectPage;
