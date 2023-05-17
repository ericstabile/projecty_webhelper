import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const InventoryObjectTableComponent = ({ data, setData }) => {
  const [editing, setEditing] = useState(data.map(() => false));
  const [tableData, setTableData] = useState(data);

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
              <React.Fragment>
                <td><input defaultValue={item.ID} id={`id-${index}`} /></td>
                <td><input defaultValue={item.Name} id={`name-${index}`} /></td>
                <td><input defaultValue={item.IconPath} id={`iconPath-${index}`} /></td>
                <td><input type="checkbox" defaultChecked={item.IsStackable} id={`isStackable-${index}`} /></td>
                <td><input defaultValue={item.MaxStack} id={`maxStack-${index}`} /></td>
                <td>
                  <Button variant="success" onClick={() => saveEdit(
                    index,
                    document.getElementById(`id-${index}`).value,
                    document.getElementById(`name-${index}`).value,
                    document.getElementById(`iconPath-${index}`).value,
                    document.getElementById(`isStackable-${index}`).checked,
                    document.getElementById(`maxStack-${index}`).value
                  )}>Save</Button>
                  <Button variant="secondary" onClick={() => toggleEdit(index)}>Cancel</Button>
                </td>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <td>{item.ID}</td>
                <td>{item.Name}</td>
                <td>{item.IconPath}</td>
                <td>{item.IsStackable.toString()}</td>
                <td>{item.MaxStack}</td>
                <td>
                  <Button variant="primary" onClick={() => toggleEdit(index)}>Edit</Button>
                </td>
              </React.Fragment>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default InventoryObjectTableComponent;
