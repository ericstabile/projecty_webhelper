import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadJsonComponent from '../LoadJsonComponent';
import InventoryObjectTableComponent from './InventoryObjectTableComponent';

const InventoryObjects = () => {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setEditing(data.map(() => false));
  }, [data]);

  const toggleEdit = (index) => {
    const newEditing = [...editing];
    newEditing[index] = !newEditing[index];
    setEditing(newEditing);
  };

  const saveEdit = (index, id, name, iconPath, isStackable, maxStack) => {
    const newData = [...data];
    newData[index] = {
      ID: id,
      Name: name,
      IconPath: iconPath,
      IsStackable: isStackable,
      MaxStack: maxStack
    };
    setData(newData);
    toggleEdit(index);
  };

  const handleFileChosen = (content) => {
    setData(content);
  };

  return (
    <div className="main-container">
      <Button variant="primary" onClick={() => navigate('/')}>Go Back</Button>
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      <InventoryObjectTableComponent
        data={data}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
      />
    </div>
  );
}

export default InventoryObjects;
