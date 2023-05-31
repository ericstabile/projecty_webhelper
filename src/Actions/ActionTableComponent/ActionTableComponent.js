import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import EditActionRow from "./ActionTableRow/EditActionRow";
import ViewActionRow from "./ActionTableRow/ViewActionRow";

const ActionTableComponent = ({ actionData, setActionData }) => {
  const [editing, setEditing] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setEditing(actionData.map(() => false));
    setTableData(actionData);
  }, [actionData]);

  const toggleEdit = (index) => {
    const newEditing = [...editing];
    newEditing[index] = !newEditing[index];
    setEditing(newEditing);
  };

  const saveEdit = (index, id, name, descriptionShort, descriptionLong, modelVersion) => {
    const newData = [...tableData];
    newData[index] = {
      ID: id,
      Name: name,
      Description_Short: descriptionShort,
      Description_Long: descriptionLong,
      ModelVersion: modelVersion,
    };

    setActionData(newData);
    toggleEdit(index);
  };

  return (
    <Table bordered hover className="table-container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Short Description</th>
          <th>Long Description</th>
          <th>Model Version</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            {editing[index] ? (
              <EditActionRow
                item={item}
                index={index}
                saveEdit={saveEdit}
                toggleEdit={toggleEdit}
              />
            ) : (
              <ViewActionRow
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
};

export default ActionTableComponent;
