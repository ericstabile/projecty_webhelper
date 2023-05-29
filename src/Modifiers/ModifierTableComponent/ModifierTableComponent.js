import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import EditModifierRow from "./ModifierTableRow/EditModifierRow";
import ViewModifierRow from "./ModifierTableRow/ViewModifierRow";

const ModifierTableComponent = ({ modifierData, setModifierData }) => {
  const [editing, setEditing] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setEditing(modifierData.map(() => false));
    setTableData(modifierData);
  }, [modifierData]);

  const toggleEdit = (index) => {
    const newEditing = [...editing];
    newEditing[index] = !newEditing[index];
    setEditing(newEditing);
  };

  const saveEdit = (
    index,
    id,
    name,
    description,
    isString,
    stringVal,
    isBool,
    boolVal,
    isInt,
    intVal
  ) => {
    const newData = [...tableData];
    newData[index] = {
      ID: id,
      Name: name,
      Description: description,
      IsString: isString,
      StringValue: stringVal,
      IsBool: isBool,
      BoolValue: boolVal,
      IsInt: isInt,
      IntValue: intVal,
    };

    setModifierData(newData);
    toggleEdit(index);
  };

  return (
    <Table bordered hover className="table-container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Is String?</th>
          <th>String Value</th>
          <th>Is Bool?</th>
          <th>Bool Value</th>
          <th>Is Int?</th>
          <th>Int Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: item.IsString
                ? "DarkGrey"
                : item.IsBool
                ? "Aqua"
                : "LightSteelBlue",
            }}
          >
            {editing[index] ? (
              <EditModifierRow
                item={item}
                index={index}
                saveEdit={saveEdit}
                toggleEdit={toggleEdit}
              />
            ) : (
              <ViewModifierRow
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

export default ModifierTableComponent;
