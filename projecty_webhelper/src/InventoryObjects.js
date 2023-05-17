import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const InventoryObjects = ({ data, setData, setLastID }) => {
  const [editing, setEditing] = useState(data.map(() => false));
  const [editIndex, setEditIndex] = useState(-1);
  const [editData, setEditData] = useState({ ID: '', Name: '', IconPath: '', IsStackable: '', MaxStack: '' });  
  const [tableData, setTableData] = useState(data);
  const navigate = useNavigate();

  const fileReader = new FileReader();

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleFileRead = (e) => {
    const content = JSON.parse(fileReader.result);
    setData(content);
  };

  const handleFileChosen = (file) => {
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const toggleEdit = (index) => {
    const newEditing = [...editing];
    newEditing[index] = !newEditing[index];
    setEditing(newEditing);
  };

  const saveEdit = (index, id, name, iconPath, isStackable, maxStack) => {
    const newData = [...data];
    newData[index] = { ID: id, Name: name, IconPath: iconPath, IsStackable: isStackable, MaxStack: maxStack };
    setTableData(newData);
    toggleEdit(index);
  };

  const handleLoadJSON = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonData = event.target.result;
      const parsedData = JSON.parse(jsonData);
  
      // Find the maximum ID in the loaded data
      let maxID = 0;
      parsedData.forEach((item) => {
        if (item.ID > maxID) {
          maxID = item.ID;
        }
      });
  
      setData(parsedData);
      setLastID(maxID);
      navigate('/inventory');
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <button onClick={() => navigate('/')}>Go Back</button>
      <input
        type="file"
        accept=".json"
        onChange={handleLoadJSON}
      />
      <Table striped bordered hover>
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
          {data.map((item, index) => (
            <tr key={index}>
              {editing[index] ? (
                <React.Fragment>
                  <td><input defaultValue={item.ID} id={`id-${index}`} /></td>
                  <td><input defaultValue={item.Name} id={`name-${index}`} /></td>
                  <td><input defaultValue={item.IconPath} id={`iconPath-${index}`} /></td>
                  <td><input type="checkbox" defaultChecked={item.IsStackable} id={`isStackable-${index}`} /></td>
                  <td><input defaultValue={item.MaxStack} id={`maxStack-${index}`} /></td>
                  <td>
                    <button onClick={() => saveEdit(
                      index,
                      document.getElementById(`id-${index}`).value,
                      document.getElementById(`name-${index}`).value,
                      document.getElementById(`iconPath-${index}`).value,
                      document.getElementById(`isStackable-${index}`).checked,
                      document.getElementById(`maxStack-${index}`).value
                    )}>Save</button>
                    <button onClick={() => toggleEdit(index)}>Cancel</button>
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
                    <button onClick={() => toggleEdit(index)}>Edit</button>
                  </td>
                </React.Fragment>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default InventoryObjects;
