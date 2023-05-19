import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadJsonComponent from '../../GlobalComponents/LoadJsonComponent/LoadJsonComponent';
import InventoryObjectTableComponent from '../InventoryObjectTableComponent/InventoryObjectTableComponent';
import './InventoryServiceMainPage.css';
import TopRowComponent from './TopRow/TopRowComponent';

const InventoryServiceMainPage = ({
  inventoryObjectData,
  setInventoryObjectData,
  setLastID
}) => {
  const navigate = useNavigate();
  
  const handleFileChosen = (content) => {
    setInventoryObjectData(content);
  };

  const handleAddNewItem = () => {
    navigate('/add');
    const newID = inventoryObjectData.length > 0 ? 
      Math.max(...inventoryObjectData.map(obj => obj.ID)) + 1 
      : 1;
    setLastID(newID);
  };

  const handleResetState = () => {
    setInventoryObjectData([]);
    setLastID(0);
  };

  return (
    <div className="main-container">
      <TopRowComponent
        handleAddNewItem={handleAddNewItem}
        handleResetState={handleResetState}
        navigate={navigate}
      />
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      <InventoryObjectTableComponent
        inventoryObjectData={inventoryObjectData || []}
      />
    </div>
  );
};

export default InventoryServiceMainPage;
