  import React, { useState, useEffect } from 'react';
  import { Table } from 'react-bootstrap';
  import EditInventoryObjectRow from './InventoryObjectTableRow/EditInventoryObjectRow';
  import ViewInventoryObjectRow from './InventoryObjectTableRow/ViewInventoryObjectRow';

  const InventoryObjectTableComponent = ({ inventoryObjectData, setInventoryObjectData, assetPathList }) => {
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

    const saveEdit = (index, id, name, iconPath, isStackable, maxStack, isIndividualSprite, xLoc, yLoc) => {
      const newData = [...tableData];
      newData[index] = {
        ID: id,
        Name: name,
        IconPath: iconPath,
        IsStackable: isStackable,
        MaxStack: maxStack,
        IsIndividualSprite: isIndividualSprite,
        X: xLoc,
        Y: yLoc
      };

      setInventoryObjectData(newData);
      toggleEdit(index);
    };

    return (
      <Table striped bordered hover className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Icon Path</th>
            <th>Is Stackable</th>
            <th>Max Stack</th>
            <th>Is Individual Sprite</th>
            <th>X</th>
            <th>Y</th>
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
                  assetPathList={assetPathList}
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
