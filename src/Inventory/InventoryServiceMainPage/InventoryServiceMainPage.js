import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadJsonComponent from '../../GlobalComponents/LoadJsonComponent/LoadJsonComponent';
import InventoryObjectTableComponent from '../InventoryObjectTableComponent/InventoryObjectTableComponent';
import './InventoryServiceMainPage.css';
import TopRowComponent from './TopRow/TopRowComponent';
import { InventoryContext } from '../../GlobalComponents/Contexts/InventoryContext';
import AssetListDropDown from '../../GlobalComponents/AssetListDropDown/AssetListDropDown';

const InventoryServiceMainPage = () => {
  const navigate = useNavigate();

  const {
    inventoryObjectData,
    setInventoryObjectData,
    setLastID,
    assetPathList
  } = useContext(InventoryContext);
  
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

  const handleSaveToFile = () => {
    const jsonStr = JSON.stringify(inventoryObjectData, null, 2);
    const blob = new Blob([jsonStr], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "inventory_object_data_v0.json");
  }

  return (
    <div className="main-container">
      <AssetListDropDown items={assetPathList || []} />
      <TopRowComponent handleAddNewItem={handleAddNewItem} handleResetState={handleResetState} handleSaveFile={handleSaveToFile} nav={navigate} />
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      {/* {assetPathList && (
        
      )} */}
      <InventoryObjectTableComponent inventoryObjectData={inventoryObjectData || []} setInventoryObjectData={setInventoryObjectData} />
    </div>
  );
};

export default InventoryServiceMainPage;
