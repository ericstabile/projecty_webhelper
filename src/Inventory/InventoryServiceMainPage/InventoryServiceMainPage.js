import React, { useEffect, useState } from 'react';
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
  const [editing, setEditing] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setEditing(inventoryObjectData.map(() => false));
  }, [inventoryObjectData]);

  const toggleEdit = (index) => {
    const newEditing = [...editing];
    newEditing[index] = !newEditing[index];
    setEditing(newEditing);
  };

  const saveEdit = (index, id, name, iconPath, isStackable, maxStack) => {
    const newData = [...inventoryObjectData];
    newData[index] = {
      ID: id,
      Name: name,
      IconPath: iconPath,
      IsStackable: isStackable,
      MaxStack: maxStack
    };
    setInventoryObjectData(newData);
    toggleEdit(index);
  };

  const handleFileChosen = (content) => {
    setInventoryObjectData(content);
  };

  const handleAddNewItem = () => {
    navigate('/add');
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
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
      />
    </div>
  );
};

export default InventoryServiceMainPage;
