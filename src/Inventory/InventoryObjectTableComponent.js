import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import EditInventoryObjectRow from './EditInventoryObjectRow';
import ViewInventoryObjectRow from './ViewInventoryObjectRow';

const InventoryObjectTableComponent = ({ inventoryObjectData, setInventoryObjectData }) => {
  const [editing, setEditing] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setEditing(inventoryObjectData.map(() => false));
    setTableData(inventoryObjectData);
  }, [inventoryObjectData]);

  const toggleEdit = (index) => {
    const newEditing = [...editing];
    newEditing[index] = !newEditing[index];
    setEditing(newEditing);
  };

  const saveEdit = (index, id, name, iconPath, isStackable, maxStack) => {
    const newData = [...tableData];
    newData[index] = {
      ID: id,
      Name: name,
      IconPath: iconPath,
      IsStackable: isStackable,
      MaxStack: maxStack
    };
    setTableData(newData);
    toggleEdit(index);
  };

  return (
    <Table striped bordered hover className="table-container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>IconPath</th>
          <th>IsStackable</th>
          <th>MaxStack</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            {editing[index] ? (
              <EditInventoryObjectRow
                item={item}
                index={index}
                saveEdit={saveEdit}
                toggleEdit={toggleEdit}
              />
            ) : (
              <ViewInventoryObjectRow
                item={item}
                index={index}
                toggleEdit={toggleEdit}
              />
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default InventoryObjectTableComponent;
